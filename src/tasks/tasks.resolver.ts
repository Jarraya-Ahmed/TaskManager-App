import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';
import { CreataTaskInput } from './dto/create-task.input';
import { Logger } from '@nestjs/common';

@Resolver( Task)
export class TasksResolver {

    private readonly logger = new Logger(TasksResolver.name);


constructor(private taskService: TasksService) {}
@Query(returns=>[Task])
tasks(): Promise<Task[]>{
    this.logger.log('Fetching all tasks...');
    return this.taskService.findAll();
}
@Mutation(returns=>Task)
createTask(@Args('creataTaskInput')createTakinput: CreataTaskInput):Promise<Task>{
    this.logger.log(`Creating task with title: ${createTakinput.title} and description: ${createTakinput.description || 'No description'}`);
    return this.taskService.createTask(createTakinput);
}

}
 