import {CREATE_RECIPE, FETCH_RECIPES} from "./actionTypes";

export const fetchRecipes = () => {
    return {
        type: FETCH_RECIPES
    }
};

export const createRecipe = (recipe : {name: string, description: string, imageUrl?: string}) => {
    return {
        type: CREATE_RECIPE,
        payload: {
            recipe
        }
    }
};