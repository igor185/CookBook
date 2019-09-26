import {getCustomRepository} from "typeorm";
import RecipeRepository from '../repository/Recipe.repository';
import {Recipe} from "../entities/Recipe";
import {Ingredient} from "../entities/Ingredient";
import IngredientRepository from "../repository/Ingredient.repository";
import {CurrentRecipe} from "../entities/CurrentRecipe";
import CurrentRecipeRepository from "../repository/CurrentRecipe.repository";
import PreviousRecipeRepository from "../repository/PreviousRecipe.repository";
import {PreviousRecipe} from "../entities/PreviousRecipe";


export const create = async ({name, description, imageUrl, ingredients}:
                                 { name: string, description: string, imageUrl: string, ingredients: Array<any> }) => {
    ingredients = await Promise.all(ingredients.map(async elem => {
        const ingredient = new Ingredient(elem.name);
        await getCustomRepository(IngredientRepository).save(ingredient);
        return ingredient
    }));

    let recipe = new Recipe(name, description, imageUrl, [], 1);
    recipe.ingredients = ingredients;
    recipe = await getCustomRepository(RecipeRepository).createRecipe(recipe);

    const currentRecipe = await getCustomRepository(CurrentRecipeRepository).save(new CurrentRecipe(recipe));

    await getCustomRepository(PreviousRecipeRepository).save(new PreviousRecipe(recipe, currentRecipe));

    return currentRecipe;
};

export const getAll = async () => {
    return await getCustomRepository(CurrentRecipeRepository).getAll();
};

export const deleteRecipe = async ({id}: { id: string }) => {
    return await getCustomRepository(RecipeRepository).deleteRecipe(id);
};

export const update = async ({id, name, description, imageUrl, ingredients, version = 1}:
                                 { id: string, name: string, description: string, imageUrl: string, ingredients: Array<any>, version: number }) => {
    ingredients = await Promise.all(ingredients.map(async elem => {
        const ingredient = new Ingredient(elem.name);
        await getCustomRepository(IngredientRepository).save(ingredient);
        return ingredient
    }));

    let recipe = new Recipe(name, description, imageUrl, [], ++version);
    recipe.ingredients = ingredients;
    recipe = await getCustomRepository(RecipeRepository).createRecipe(recipe);

    await getCustomRepository(CurrentRecipeRepository).update({recipe: {id}}, {recipe});

    const currentRecipe = await getCustomRepository(CurrentRecipeRepository).findOne({recipe});

    if (currentRecipe) {
        await getCustomRepository(PreviousRecipeRepository).save(new PreviousRecipe(recipe, currentRecipe));
    }

    return currentRecipe;
};