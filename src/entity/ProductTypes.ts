import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductTypes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
