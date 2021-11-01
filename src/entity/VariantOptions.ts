import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import ProductVariants from "./ProductVariants";

@Entity()
export default class VariantOptions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ProductVariants, (variant) => variant.options)
  variant: ProductVariants;
}
