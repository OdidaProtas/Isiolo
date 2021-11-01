import {
  Column,
  Entity,
  ManyToMany,
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

  @ManyToMany(() => Product, (product) => product.variants)
  product: Product;
}
