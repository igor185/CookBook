import {getCustomRepository} from "typeorm";
import RecipeRepository from '../repository/Recipe.repository';
import {Recipe} from "../entities/Recipe";


export const create = async ({name, description, imageUrl}: { name: string, description: string, imageUrl?: string }) => {
    const recipe = new Recipe(name, description, imageUrl);
    return await getCustomRepository(RecipeRepository).createRecipe(recipe);
};

export const getAll = async () => {
    return await getCustomRepository(RecipeRepository).getAll();
};

export const deleteRecipe = async ({id}: { id: string }) => {
    return await getCustomRepository(RecipeRepository).deleteRecipe(id);
};