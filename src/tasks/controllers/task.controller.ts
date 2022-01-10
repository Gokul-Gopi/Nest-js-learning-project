import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { CreateTaskDTO } from '../dtos/task.dto';
import { TaskService } from '../services/task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('')
  getTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskByID(@Param('id', ParseIntPipe) id: number) {
    const task = this.taskService.searchTask(id);
    if (task) {
      return task;
    } else {
      throw new HttpException('Task not found', HttpStatus.BAD_REQUEST);
    }
  }

  @Post('create')
  createTask(@Body() createTaskDTO: CreateTaskDTO) {
    return this.taskService.newTask(createTaskDTO);
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number) {
    this.taskService.deleteTask(id);
  }
}
