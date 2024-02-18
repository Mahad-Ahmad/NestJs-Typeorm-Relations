import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Employee } from './office/entities/employee.entity';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        synchronize: true,
        entities: ['/dist/src/**/*.entity.js'],
        // entities: [__dirname + '/../office/**/*.entity{.ts,.js}'],
        // migrations: [__dirname + '/../migrations/*{.ts,.js}'],
        // cli: {
        //   migrationsDir: './src/migrations',
        // },
        logging: true,
        autoLoadEntities: true,
        //migrationsRun: true, // to automatically run migrations set it to true
      }),
    }),
  ],
})
export class DatabaseModule {}
