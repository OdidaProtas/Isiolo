import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { StoreProfile } from "./StoreProfile";
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

  @OneToOne(()=>StoreProfile)
  @JoinColumn()
  profile:StoreProfile

  @ManyToOne(() => User, (user) => user.stores)
  owner: User;
}
