import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ContactInfo } from './contactInfo.entity';
import { Task } from './task.entity';
import { Meeting } from './meeting.entity';

@Entity()
export class Employee extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Employee, (employee) => employee.directReports, {
    onDelete: 'SET NULL',
  })
  manager: Employee;

  @OneToMany(() => Employee, (employee) => employee.manager)
  directReports: Employee[];

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee, {
    onDelete: 'SET NULL',
  })
  contactInfo: ContactInfo;

  @OneToMany(() => Task, (task) => task.employee)
  tasks: Task[];

  @ManyToMany(() => Meeting, (meeting) => meeting.attendees)
  meetings: Meeting[];
}
