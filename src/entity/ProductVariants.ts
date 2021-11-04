import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product } from "./Product";
import VariantOptions from "./VariantOptions";

@Entity()
export default class ProductVariants {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => VariantOptions, (options) => options.variant)
  options: VariantOptions[];

  @ManyToOne(() => Product, (product) => product.variants)
  product: Product;
}
