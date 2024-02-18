import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { ScheduleModule } from '@nestjs/schedule';
import { OfficeModule } from './office/office.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './office/entities/employee.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    ScheduleModule.forRoot(),
    OfficeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
