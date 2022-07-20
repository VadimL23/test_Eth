import {
  Entity,
  Column,
  DeleteDateColumn,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'order' })
export class OrderEntity {
  @Exclude()
  @PrimaryColumn()
  id: number;

  @Column()
  orderId: string;

  @Column()
  amountA: string;

  @Column()
  amountB: string;

  @Column()
  amountLeftToFill: string;

  @Column()
  fees: string;

  @Column()
  tokenA: string;

  @Column()
  tokenB: string;

  @Column()
  user: string;

  @Column()
  isCancelled: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn()
  deletedAt: Date;
}
