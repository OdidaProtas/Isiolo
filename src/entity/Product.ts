import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Collections } from "./Collections";
import { ProductMedia } from "./ProductMedia";
import { ProductSeo } from "./ProductSeo";
import { ProductTags } from "./ProductTags";
import { ProductTheme } from "./ProductTheme";
import ProductVariants from "./ProductVariants";
import Store from "./Store";
import { Transfer } from "./Transfer";

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

  @Column({
    nullable: true,
  })
  vendor: string;

  @Column({
    nullable: true,
  })
  productType: string;

  @Column({
    nullable: true,
  })
  availability: string;

  @Column({
    nullable: true,
  })
  price: string;

  @Column({
    nullable: true,
  })
  compareAtPrice: string;

  @Column({
    nullable: true,
  })
  costPerItem: string;

  @Column({
    default: false,
  })
  isTaxed: boolean;

  @Column({ default: false })
  trackQuantity: boolean;

  @Column({
    default: 0,
  })
  quantity: number;

  @Column({
    default: false,
  })
  sellOutOfStock: boolean;

  @Column({
    default: 0,
  })
  sku: number;

  @Column({
    nullable: true,
  })
  barcode: string;

  @Column({
    default: false,
  })
  isPhysical: boolean;

  @Column({
    nullable: true,
  })
  weight: string;

  @Column({
    nullable: true,
  })
  unit: string;

  @Column({
    default: false,
  })
  hasOptions: boolean;

  @Column({
    nullable: true,
  })
  options: string;

  @ManyToOne(() => Store, (store) => store.products, {
    orphanedRowAction: "delete",
  })
  store: Store;

  @OneToMany(() => Collections, (coll) => coll.product)
  collections: Collections[];

  @OneToMany(() => ProductTags, (tag) => tag.product)
  tags: ProductTags[];

  @OneToMany(() => ProductMedia, (media) => media.product)
  media: ProductMedia[];

  @ManyToOne(() => ProductTheme)
  theme: ProductTheme;

  @Column({
    nullable: true,
  })
  seoTitle: string;
  @Column({
    nullable: true,
  })
  seoDesc: string;
  @Column({
    nullable: true,
  })
  seoLink: string;

}
