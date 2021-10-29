import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Store from "./Store";

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({
    nullable:true
  })
  desc: string;

  @ManyToOne(() => Store, (store) => store.products)
  store: Store;
}
