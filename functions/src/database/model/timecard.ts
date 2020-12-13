import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class TimecardModel {
  @PrimaryGeneratedColumn()
  public id!: number;

  @PrimaryColumn({ type: "varchar", length: 10 })
  public name: string;

  @Column({ type: "int" })
  public age: number = 0;

  constructor(name: string) {
    this.name = name;
  }
}
