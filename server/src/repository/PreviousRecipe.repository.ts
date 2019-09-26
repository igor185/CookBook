import {EntityRepository, Repository} from "typeorm";
import {PreviousRecipe} from "../entities/PreviousRecipe";


@EntityRepository(PreviousRecipe)
class PreviousRecipeRepository extends Repository<PreviousRecipe>{

}
export default PreviousRecipeRepository;