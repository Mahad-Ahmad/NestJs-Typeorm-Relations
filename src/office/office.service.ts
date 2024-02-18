import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { ContactInfo } from './entities/contactInfo.entity';
import { Task } from './entities/task.entity';
import { Meeting } from './entities/meeting.entity';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepo: Repository<Employee>,
    @InjectRepository(ContactInfo)
    private readonly contactInfRepo: Repository<ContactInfo>,
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
    @InjectRepository(Meeting)
    private readonly meetingRepo: Repository<Meeting>,
  ) {}

  async seed() {
    const emp = this.employeeRepo.create({ name: 'Mr. Mahad' });

    await this.employeeRepo.save(emp);

    const empContactInfo = this.contactInfRepo.create({
      email: 'mahadahmad@gmail.com',
      phone: '03156452735',
    });
    empContactInfo.employee = emp;
    await this.contactInfRepo.save(empContactInfo);

    const manager = this.employeeRepo.create({
      name: 'Malik',
      manager: emp,
    });

    const task1 = this.taskRepo.create({ name: 'Collect all books' });
    await this.taskRepo.save(task1);
    const task2 = this.taskRepo.create({ name: 'Put books back' });
    await this.taskRepo.save(task2);

    manager.tasks = [task1, task2];

    const meeting = this.meetingRepo.create({ zoomUrl: 'meeting.com' });
    meeting.attendees = [emp];
    await this.meetingRepo.save(meeting);

    manager.meetings = [meeting];

    await this.employeeRepo.save(manager);
  }

  create(createOfficeDto: CreateOfficeDto) {
    return 'This action adds a new office';
  }

  findAll() {
    return `This action returns all office`;
  }

  findOne(id: number) {
    return `This action returns a #${id} office`;
  }

  update(id: number, updateOfficeDto: UpdateOfficeDto) {
    return `This action updates a #${id} office`;
  }

  remove(id: number) {
    return `This action removes a #${id} office`;
  }
}
