import IRecipe from "../../../interfaces/IRecipe";
import {SET_RECIPES} from "./actionTypes";

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
            }
    }
    return state;
}