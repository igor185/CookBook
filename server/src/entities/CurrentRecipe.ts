import {Column, Entity, ManyToOne, PrimaryColumn} from "typeorm";
import uuid from 'uuid/v4'
import {Recipe} from "./Recipe";


@Entity()
export class CurrentRecipe{
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    createdAt: Date;

    @ManyToOne(type => Recipe, recipe => recipe.id, {onDelete: "CASCADE"})
    recipe: Recipe;


    constructor(recipe: Recipe){
        this.id = uuid();
        this.recipe = recipe;
        this.createdAt = new Date()
    }
}