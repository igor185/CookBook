import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Ingredient} from "./Ingredient";
const uuid = require('uuid/v4');

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    name!: string;

    @Column()
    description!: string;

    @Column({nullable: true})
    imageUrl?: string;

    @Column({nullable: true})
    createdAt?: Date;

    @Column({default: 1})
    version: number;

    @ManyToMany(type => Ingredient)
    @JoinTable()
    ingredients: Ingredient[];

    constructor(name: string, description: string, imageUrl: string, ingredients: Ingredient[], version: number) {
        this.id = uuid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.createdAt = new Date();
        this.ingredients = ingredients;
        this.version = version;

    }

}