import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'bool', default: true })
  isActive: boolean;
}
