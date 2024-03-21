import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
    async findAll(): Promise<Task[]> {
        const task= new Task();
        task.id=1;
        task.title="Create Demo Task Management app";
        return [task]
    }
}
