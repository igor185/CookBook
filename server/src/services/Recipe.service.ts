import {getCustomRepository} from "typeorm";
import RecipeRepository from '../repository/Recipe.repository';
import {Recipe} from "../entities/Recipe";
import {Ingredient} from "../entities/Ingredient";
import IngredientRepository from "../repository/Ingredient.repository";


export const create = async ({name, description, imageUrl, ingredients}: { name: string, description: string, imageUrl: string, ingredients: Array<any> }) => {
    ingredients = await Promise.all(ingredients.map(async elem => {
        const ingredient = new Ingredient(elem.name);
        await getCustomRepository(IngredientRepository).save(ingredient);
        return ingredient
    }));

    const recipe = new Recipe(name, description, imageUrl, []);
    recipe.ingredients = ingredients;
    return await getCustomRepository(RecipeRepository).createRecipe(recipe);
};

export const getAll = async () => {
    return await getCustomRepository(RecipeRepository).getAll();
};

export const deleteRecipe = async ({id}: { id: string }) => {
    return await getCustomRepository(RecipeRepository).deleteRecipe(id);
};