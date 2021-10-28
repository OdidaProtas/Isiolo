import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StoreContact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  
}
