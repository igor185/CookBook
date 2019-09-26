import {Recipe} from "../entities/Recipe";
import {EntityRepository, Repository} from "typeorm";


@EntityRepository(Recipe)
class RecipeRepository extends Repository<Recipe> {

    async getAll() {
        return this.find({order: {createdAt : -1}, relations: ['ingredients']})
    }

    async createRecipe(recipe: Recipe) {
        return this.save(recipe)
    }

    async deleteRecipe(id: string) {
        this.delete(id)
    }


}

export default RecipeRepository;