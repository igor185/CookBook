import {EntityRepository, Repository} from "typeorm";
import {PreviousRecipe} from "../entities/PreviousRecipe";


@EntityRepository(PreviousRecipe)
class PreviousRecipeRepository extends Repository<PreviousRecipe> {

    async getById(id: string) {
        return await this.find({relations: ['prevRecipe', 'prevRecipe.ingredients'], where: {currRecipe: {id}}});
    }
}

export default PreviousRecipeRepository;