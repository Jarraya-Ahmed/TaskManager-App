import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>){}
    async findAll(): Promise<Task[]> {
                //const task= new Task();
                //task.id=1;
                // task.title="Create Demo Task Management app";
                //return [task]
     return this.tasksRepository.find()
    }
}
