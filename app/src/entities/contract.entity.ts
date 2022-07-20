import {
  Entity,
  Column,
  DeleteDateColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'contract' })
export class ContractEntity {
  @Exclude()
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Exclude()
  @Column()
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn()
  deletedAt: Date;
}
