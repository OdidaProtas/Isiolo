import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Store from "./Store";

export enum ProductStatus {
  "draft" = "draft",
  "active" = "active",
  "archived" = "archived",
}

@Entity()
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  desc: string;

  @Column({
    type: "enum",
    enum: ProductStatus,
    default: ProductStatus.draft,
  })
  status: ProductStatus;

  @ManyToOne(() => Store, (store) => store.products)
  store: Store;
}
