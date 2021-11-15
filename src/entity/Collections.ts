import { Mode } from "fs";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import Store from "./Store";

@Entity()
export class Collections {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  desc: string;

  @Column({
    nullable: true,
  })
  seoTitle: string;

  @Column({
    nullable: true,
  })
  seoLink: string;

  @Column({
    nullable: true,
  })
  seoDesc: string;

  @Column({
    nullable: true,
  })
  availability: string;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => Store, (s) => s.collections)
  store: Store;
}
