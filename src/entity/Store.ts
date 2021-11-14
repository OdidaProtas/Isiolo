import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Product } from "./Product";
import { StoreProfile } from "./StoreProfile";
import Supplier from "./Supplier";
import { User } from "./User";

@Entity()
export default class Store {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    unique: true,
  })
  name: string;

  @Column({
    type: "timestamptz",
    nullable: true,
  })
  created: string;

  @OneToOne(() => StoreProfile)
  @JoinColumn()
  profile: StoreProfile;

  @ManyToOne(() => User, (user) => user.stores)
  owner: User;

  @OneToMany(() => Product, (product) => product.store, { cascade: true })
  products: Product[];

  @OneToMany(() => Supplier, (s) => s.store)
  suppliers: Supplier[];
}
