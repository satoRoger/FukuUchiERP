import { DateTime } from "luxon";
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import User from "./user";

type CardType = "workin" | "workout" | "breakin" | "breakout";

@Entity()
export default class Timecard {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ type: "timestamp" })
  public date: DateTime;

  @Column({ type: "varchar" })
  public cardType: CardType;

  @OneToOne(type => User, user => user.id)
  public userId: number

  @Column({ type: "double precision" })
  public longitude?: number;

  @Column({ type: "double precision" })
  public latitude?: number;


  constructor(date: DateTime, cardType: string, userId: number, longitude?: number, latitude?: number) {
    this.date = date;
    this.cardType = cardType;
    this.userId = userID;
    this.longitude = longitude;
    this.laittude = latitude
  }
}
