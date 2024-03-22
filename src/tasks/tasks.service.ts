import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreataTaskInput } from './dto/create-task.input';

@Injectable()
export class TasksService {
    constructor(@InjectRepository(Task) private tasksRepository: Repository<Task>){}
    
    
    async findAll(): Promise<Task[]> {
          
     return this.tasksRepository.find()
    }

    createTask(creatTaskInput: CreataTaskInput):Promise<Task>{

        const newTask= this.tasksRepository.create(creatTaskInput);
        return this.tasksRepository.save(newTask);
    }
}
