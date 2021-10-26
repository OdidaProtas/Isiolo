import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export default class Store {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    unique:true
  })
  name: string;

  @Column({
    type: "timestamptz",
    nullable:true
  })
  created: string;

  @ManyToOne(() => User, (user) => user.stores)
  owner: User;
}
