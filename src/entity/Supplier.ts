import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Store from "./Store";

@Entity()
export default class Supplier {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  address: string;

  @Column({
    nullable: true,
  })
  apartment: string;

  @Column({
    nullable: true,
  })
  city: string;

  @Column({
    nullable: true,
  })
  country: string;

  @Column({
    nullable: true,
  })
  postalCode: string;

  @Column({ nullable: true })
  contactName: string;

  @Column({
    nullable: true,
  })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @ManyToOne(() => Store, (s) => s.suppliers)
  store: Store;
}
