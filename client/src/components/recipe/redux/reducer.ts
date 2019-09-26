import IRecipe from "../../../interfaces/IRecipe";
import {ADD_RECIPE_TO_LIST, SET_RECIPES} from "./actionTypes";

const initialState: {
    recipes: IRecipe[] | null
} = {
    recipes: null
};

export default function(state = initialState, action: any) {
    switch (action.type) {
        case SET_RECIPES:
            return{
                ...state,
                recipes: action.payload.recipes
            };
        case ADD_RECIPE_TO_LIST:
            if(!action.payload.recipe || !state.recipes){
                return state;
            }

            const recipeHas = state.recipes.some(recipe => recipe.id === action.payload.recipe.id);

            if(recipeHas)
                return state;

            return {
                ...state,
                recipes: [action.payload.recipe, ...state.recipes]
            }

    }
    return state;
}