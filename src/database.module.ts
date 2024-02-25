// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import * as dotenv from 'dotenv';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { Employee } from './office/entities/employee.entity';
// import { DataSource } from 'typeorm';
// dotenv.config();

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: (configService: ConfigService) => ({
//         type: 'postgres',
//         host: configService.get('POSTGRES_HOST'),
//         port: configService.get('POSTGRES_PORT'),
//         username: configService.get('POSTGRES_USER'),
//         password: configService.get('POSTGRES_PASSWORD'),
//         database: configService.get('POSTGRES_DB'),
//         // synchronize: true,
//         // entities: ['/dist/src/**/*.entity.js'],
//         // // entities: [__dirname + '/../office/**/*.entity{.ts,.js}'],
//         // // migrations: [__dirname + '/../migrations/*{.ts,.js}'],
//         // // cli: {
//         // //   migrationsDir: './src/migrations',
//         // // },
//         // logging: true,
//         // autoLoadEntities: true,
//         //migrationsRun: true, // to automatically run migrations set it to true
//         entities: [__dirname + '/../office/**/*.entity{.ts,.js}'],
//         migrations: [__dirname + '/../migrations/*{.ts,.js}'],
//         migrationsRun: false, // to automatically run migrations set it to true
//         synchronize: false, //true if you want to create auto migrations
//         // logging: ["query", "error"],
//         logging: true,
//         migrationsTableName: 'migrations',
//       }),
//     }),
//   ],
// })

// // const dataSource = new DataSource(dataSourceOptions);s

// // export default dataSource;
// export class DatabaseModule {}

import { DataSource, DataSourceOptions } from 'typeorm';
require('dotenv').config();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [__dirname + '/../office/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  migrationsRun: false, // to automatically run migrations set it to true
  synchronize: false, //true if you want to create auto migrations
  // logging: ["query", "error"],
  logging: true,
  // migrationsTableName: 'ksjbcdksjb',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
