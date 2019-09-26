import {Entity, ManyToOne, PrimaryColumn} from "typeorm";
import {Recipe} from "./Recipe";
import uuid from "uuid/v4";
import {CurrentRecipe} from "./CurrentRecipe";

@Entity()
export class PreviousRecipe{
    @PrimaryColumn('uuid')
    id: string;

    @ManyToOne(type => Recipe, recipe => recipe.id)
    prevRecipe: Recipe;

    @ManyToOne(type => CurrentRecipe, CurrentRecipe => CurrentRecipe.id, {onDelete: "CASCADE"})
    currRecipe: CurrentRecipe;

    constructor(recipe: Recipe, currRecipe: CurrentRecipe){
        this.id = uuid();
        this.prevRecipe = recipe;
        this.currRecipe = currRecipe;
    }

}