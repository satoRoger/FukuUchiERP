import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export default class User {
    public id?: number;
    public name: string;


    constructor(name: string) {
        this.name = name;
    }
}