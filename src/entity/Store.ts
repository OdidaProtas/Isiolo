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
import { Collections } from "./Collections";
import { Product } from "./Product";
import { StoreProfile } from "./StoreProfile";
import Supplier from "./Supplier";
import { Transfer } from "./Transfer";
import { User } from "./User";
import { Vendor } from "./Vendor";

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

  @OneToMany(() => Vendor, (v) => v.store)
  vendors: Vendor[];

  @OneToMany(() => Transfer, (t) => t.store)
  transfers: Transfer[];

  @OneToMany(() => Collections, (c) => c.store)
  collections: Collections[];
}
