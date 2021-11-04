import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProductSeo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  title: string;

  @Column({
    nullable: true,
  })
  desc: string;

  @Column({
    nullable: true,
  })
  urlHandle: string;

}
