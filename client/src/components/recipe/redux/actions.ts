import {
    ADD_RECIPE_TO_LIST,
    CREATE_RECIPE,
    DELETE_RECIPE,
    DELETE_RECIPE_FROM_LIST,
    FETCH_RECIPES,
    UPDATE_RECIPE, UPDATE_RECIPE_FROM_LIST
} from "./actionTypes";
import IRecipe, {INewRecipe} from "../../../interfaces/IRecipe";

export const fetchRecipes = () => {
    return {
        type: FETCH_RECIPES
    }
};

export const createRecipe = (recipe: INewRecipe) => {
    return {
        type: CREATE_RECIPE,
        payload: {
            recipe: recipe.recipe
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

export const editRecipe = (recipe: INewRecipe) => {
  return{
      type: UPDATE_RECIPE,
      payload:{
          recipe:{
              ...recipe.recipe,
              id: recipe.id,
          }
      }
  }
};

export const deleteRecipeFromList = (id: string) => {
  return{
      type: DELETE_RECIPE_FROM_LIST,
      payload: {id}
  }
};

export const updateRecipeFromList = (recipe: any) => {
  return{
      type: UPDATE_RECIPE_FROM_LIST,
      payload: {recipe}
  }
};