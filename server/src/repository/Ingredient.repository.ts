import {EntityRepository, Repository} from "typeorm";
import {Ingredient} from "../entities/Ingredient";


@EntityRepository(Ingredient)
class IngredientRepository extends Repository<Ingredient> {




}

export default IngredientRepository;