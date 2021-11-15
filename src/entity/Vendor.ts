import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Store from "./Store";

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Store, (s) => s.vendors)
  store: Store;
}
