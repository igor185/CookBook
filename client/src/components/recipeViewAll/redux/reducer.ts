import {DELETE, GET_ALL_VERSIONS, SET_ALL_VERSIONS} from "./actionTypes";
import IRecipe from "../../../interfaces/IRecipe";

const initialState: {
    recipes: null| Array<{
        id: string;
        prevRecipe: IRecipe
    }>,
    id: string | null
} = {
    recipes: null,
    id: null
};

export const recipeAdapter = (arr: any) => {
    return arr.map((elem:any) => {
        elem.prevRecipe.ingredients = elem.prevRecipe.ingredients.reverse();
        return elem
    }).reverse()
};


export default function (state = initialState, action: any) {
    switch (action.type) {
        case SET_ALL_VERSIONS:
            return{
                ...state,
                recipes: recipeAdapter(action.payload.recipes || [])
            };
        case GET_ALL_VERSIONS:
            return{
                ...state,
                id: action.payload.id,
                recipes: null
            };
        case DELETE:
            return {
                ...state,
                id: null,
                recipes: null
            };
        default:
            return state;
    }
}