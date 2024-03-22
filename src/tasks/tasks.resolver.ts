import { Query, Resolver } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Resolver( Task)
export class TasksResolver {

constructor(private taskService: TasksService) {}
@Query(returns=>[Task])
tasks(): Promise<Task[]>{
    return this.taskService.findAll();
}

}
