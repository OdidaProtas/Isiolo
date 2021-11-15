import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import Store from "./Store";
import Supplier from "./Supplier";

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Supplier, (s) => s.transfers)
  supplier: Supplier;

  @Column({
    nullable: true,
  })
  destination: string;

  @Column({
    nullable: true,
  })
  arrival: string;

  @Column({
    nullable: true,
  })
  trackingNumber: string;

  @Column({
    nullable: true,
  })
  url: string;

  @Column({
    nullable: true,
  })
  ref: string;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];

  @ManyToOne(() => Store, (s) => s.transfers)
  store: Store;
}
