import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreataTaskInput } from './dto/create-task.input';

@Resolver( Task)
export class TasksResolver {

constructor(private taskService: TasksService) {}
@Query(returns=>[Task])
tasks(): Promise<Task[]>{
    return this.taskService.findAll();
}
@Mutation(returns=>Task)
createTask(@Args('creataTaskInput')createTakinput: CreataTaskInput):Promise<Task>{
    return this.taskService.createTask(createTakinput);
}

}
 