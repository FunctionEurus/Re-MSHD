/* eslint-disable prettier/prettier */
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity() // sql table === 'code'
export class RegionCode {
  @PrimaryColumn()
  code: string;

  @Column()
  province: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  town: string;

  @Column()
  village: string;
}
