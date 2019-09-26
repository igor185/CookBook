import {Column, Entity, PrimaryColumn} from "typeorm";
import uuid from 'uuid/v4';

@Entity()
export class Ingredient{
    @PrimaryColumn('uuid')
    id: string;

    @Column()
    name: string;

    constructor(name: string){
        this.id = uuid();
        this.name = name;
    }
}