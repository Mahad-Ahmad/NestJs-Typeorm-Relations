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
import { Employee } from './employee.entity';

@Entity()
export class Meeting extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  zoomUrl: string;

  @ManyToMany(() => Employee, (employee) => employee.meetings)
  @JoinTable()
  attendees: Employee[];
}
