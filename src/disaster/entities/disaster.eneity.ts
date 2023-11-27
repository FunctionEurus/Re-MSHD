/* eslint-disable prettier/prettier */
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table === 'code'
export class Test {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  location: string;

  @Column()
  location_code: string;

  @Column({ type: 'timestamp' })
  time: Date;

  @Column()
  time_code: string;

  @Column()
  source: string;

  @Column()
  source_code: string;

  @Column()
  carrier: string;

  @Column()
  carrier_code: string;

  @Column()
  disaster: string;

  @Column()
  disaster_code: string;
}
