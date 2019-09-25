import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
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

    constructor(name: string, description: string, imageUrl?: string) {
        this.id = uuid();
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }

}