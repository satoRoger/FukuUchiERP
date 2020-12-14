import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
    public id?: number;
    @Column({ type: "varchar" })
    public name: string;


    constructor(name: string) {
        this.name = name;
    }
}