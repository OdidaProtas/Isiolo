import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Store from "./Store";

@Entity()
export class GiftCard {
  @PrimaryGeneratedColumn("uuid")
  id: string;

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
  seoDesc: string;

  @Column({
    nullable: true,
  })
  seoLink: true;

  @Column({
    default: "draft",
  })
  status: string;

  @Column({
    nullable: true,
  })
  vendor: string;

  @Column({
    nullable: true,
  })
  productType: string;

  @ManyToOne(() => Store, (s) => s.giftCards)
  store: Store;
}
