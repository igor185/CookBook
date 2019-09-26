import {getCustomRepository, MigrationInterface, QueryRunner} from "typeorm";
import {Recipe} from "../entities/Recipe";
import RecipeRepository from "../repository/Recipe.repository";

export class Recipe1569435351715 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const recipe = new Recipe('Awesome pizza!', 'It is a simple method to cook pizza', '', []);
        await getCustomRepository(RecipeRepository).save(recipe);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
