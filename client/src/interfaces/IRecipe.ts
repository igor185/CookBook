import {INewIngredient} from "./IIngredien";

export default interface IRecipe{
    id: string,
    name: string,
    description: string,
    imageUrl?: string,
    createdAt: Date
}

export const newRecipeDefault: INewRecipe = {
    name: '',
    description: '',
    ingredients: []
};

export interface INewRecipe{
    name: string,
    description: string,
    imageUrl?: string
    ingredients: INewIngredient[]
}