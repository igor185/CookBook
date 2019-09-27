import {GET_ALL_VERSIONS, SET_ALL_VERSIONS} from "./actionTypes";
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


export default function (state = initialState, action: any) {
    switch (action.type) {
        case SET_ALL_VERSIONS:
            return{
                ...state,
                recipes: (action.payload.recipes || []).reverse()
            };
        case GET_ALL_VERSIONS:
            return{
                ...state,
                id: action.payload.id,
                recipes: null
            };
        default:
            return state;
    }
}