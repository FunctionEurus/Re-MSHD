import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entities/disaster.eneity';
import { DisasterService } from './disaster.service';
import { DisasterController } from './disaster.controller';
import { Info } from 'src/const';
import { RegionCode } from './entities/region.entity';
import { Repository } from 'typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Test]),TypeOrmModule.forFeature([RegionCode])],
    providers: [DisasterService, Info, Repository],
    controllers: [DisasterController]
})
export class DisasterModule {
    // constructor(private readonly info: Info) {}
}
