import { Module } from '@nestjs/common';
import { OfficeService } from './office.service';
import { OfficeController } from './office.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { ContactInfo } from './entities/contactInfo.entity';
import { Task } from './entities/task.entity';
import { Meeting } from './entities/meeting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, ContactInfo, Task, Meeting])],
  controllers: [OfficeController],
  providers: [OfficeService],
})
export class OfficeModule {}
