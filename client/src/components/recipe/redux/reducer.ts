import IRecipe from "../../../interfaces/IRecipe";
import {ADD_RECIPE_TO_LIST, DELETE_RECIPE_FROM_LIST, SET_RECIPES, UPDATE_RECIPE_FROM_LIST} from "./actionTypes";

const initialState: {
    recipes: Array<{
        id: string,
        recipe: IRecipe
    }> | null
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
            };
        case DELETE_RECIPE_FROM_LIST:
            if(!action.payload.id || !state.recipes){
                return state;
            }

            let recipeIndexToRemove = -1;
            state.recipes.forEach((recipe, index) => {
                if(recipe.recipe.id === action.payload.id){
                    recipeIndexToRemove = index;
                }
            });
            if(recipeIndexToRemove === -1){
                return state;
            }

            const recipes = [...state.recipes];

            recipes.splice(recipeIndexToRemove, 1);

            return {
                ...state,
                recipes: [...recipes]
            };
        case UPDATE_RECIPE_FROM_LIST:
            const recipe = action.payload.recipe;
            if(!recipe || !state.recipes){
                return state;
            }

            let recipeIndexToUpdate = -1;
            state.recipes.forEach((recipeElem, index) => {
                if(recipeElem.id === recipe.id){
                    recipeIndexToUpdate = index;
                }
            });
            if(recipeIndexToUpdate === -1){
                return state;
            }

            const recipesAll = [...state.recipes];

            recipesAll[recipeIndexToUpdate] = recipe;

            return {
                ...state,
                recipes: [...recipesAll]
            };
        default:
            return state;
    }
}