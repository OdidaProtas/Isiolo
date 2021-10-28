import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Store from "./Store";

@Entity()
export class StoreProfile {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  industry: string;

  @Column()
  subCounty: string;

  @Column()
  county: string;

  @Column()
  address: string;

  @Column({
    nullable: true,
  })
  apartment: string;

  @Column()
  phoneNumber: string;

  
  @OneToOne(() => Store, (store) => store.profile)
  store: Store;
}
