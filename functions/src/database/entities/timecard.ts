import { DateTime } from "luxon";
import {
  Column,
  Entity,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import CardType from "../../domain/attendanceManagement/src/valueObject/cardtype";
import User from "./user";

@Entity()
export default class Timecard {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ type: "timestamp" })
  public date: string;

  @Column({ type: "varchar" })
  public cardType: CardType;

  @OneToOne((type) => User, (user) => user.id)
  public userId: string;

  @Column({ type: "double precision" })
  public longitude?: number;

  @Column({ type: "double precision" })
  public latitude?: number;

  constructor(
    date: string,
    cardType: CardType,
    userId: string,
    longitude?: number,
    latitude?: number
  ) {
    this.date = date;
    this.cardType = cardType;
    this.userId = userId;
    this.longitude = longitude;
    this.latitude = latitude;
  }
}
