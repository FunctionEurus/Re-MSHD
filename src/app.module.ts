import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DisasterController } from './disaster/disaster.controller';
import { DisasterService } from './disaster/disaster.service';
import { Info } from './const';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DisasterModule } from './disaster/disaster.module';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'postgres',
      autoLoadEntities: true,
      synchronize: true
    }
  ), DisasterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
