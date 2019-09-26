import {ADD_RECIPE_TO_LIST, CREATE_RECIPE, DELETE_RECIPE, FETCH_RECIPES} from "./actionTypes";
import IRecipe from "../../../interfaces/IRecipe";

export const fetchRecipes = () => {
    return {
        type: FETCH_RECIPES
    }
};

export const createRecipe = (recipe: { name: string, description: string, imageUrl?: string }) => {
    return {
        type: CREATE_RECIPE,
        payload: {
            recipe
        }
    }
};

export const addRecipeToList = (recipe: IRecipe) => {
    return {
        type: ADD_RECIPE_TO_LIST,
        payload: {recipe}
    }
};

export const deleteRecipe = (id: string) => {
    return {
        type: DELETE_RECIPE,
        payload: {
            id
        }
    }
};