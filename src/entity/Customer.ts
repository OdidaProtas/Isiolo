import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Store from "./Store";

@Entity()
export default class Customer {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({
    nullable: true,
  })
  company: string;

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
  region: string;

  @Column({
    nullable: true,
  })
  city: string;

  @Column({
    nullable: true,
  })
  note: string;

  @ManyToOne(()=>Store, s=>s.customers)
  store: Store
}
