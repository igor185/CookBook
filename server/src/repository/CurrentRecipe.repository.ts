import {EntityRepository, Repository} from "typeorm";
import {CurrentRecipe} from "../entities/CurrentRecipe";


@EntityRepository(CurrentRecipe)
class CurrentRecipeRepository extends Repository<CurrentRecipe>{
    async getAll() {
        return this.find({order: {createdAt : -1}, relations: ['recipe', 'recipe.ingredients']})
    }
}
export default CurrentRecipeRepository;