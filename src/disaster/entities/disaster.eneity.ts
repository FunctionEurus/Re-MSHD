/* eslint-disable prettier/prettier */
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
@Index(['location', 'time', 'source', 'carrier', 'disaster'])
@Entity() // sql table === 'code'
export class Code {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  location: string;

  @Column()
  time: Date;

  @Column()
  source: string;

  @Column()
  carrier: string;

  @Column()
  disaster: string;

  @Column()
  code: string;
}
