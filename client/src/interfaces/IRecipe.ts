import IIngredient, {INewIngredient} from "./IIngredien";

export default interface IRecipe {
    id: string,
    name: string,
    description: string,
    imageUrl?: string,
    createdAt: Date,
    ingredients: IIngredient[],
    version: number
}

export const newRecipeDefault: INewRecipe = {
    recipe: {
        id: '',
        name: '',
        description: '',
        ingredients: [],
        version: 1,
        createdAt: new Date()
    }
};

export interface INewRecipe {
    id?: string,
    recipe: {
        id: string,
        name: string,
        description: string,
        imageUrl?: string
        ingredients: INewIngredient[],
        version: number,
        createdAt: Date
    }
}