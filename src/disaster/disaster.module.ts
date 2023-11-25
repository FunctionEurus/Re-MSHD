import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Code } from './entities/disaster.eneity';
import { DisasterService } from './disaster.service';
import { DisasterController } from './disaster.controller';
import { Info } from 'src/const';

@Module({
    imports: [TypeOrmModule.forFeature([Code])],
    providers: [DisasterService, Info],
    controllers: [DisasterController]
})
export class DisasterModule {
    // constructor(private readonly info: Info) {}
}
