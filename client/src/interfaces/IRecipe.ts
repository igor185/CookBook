export default interface IRecipe{
    id: string,
    name: string,
    description: string,
    imageUrl?: string
}

export const newRecipeDefault = {
    id: '',
    name: '',
    description: '',
    imageUrl: ''
}