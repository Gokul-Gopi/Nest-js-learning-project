import { Injectable } from '@nestjs/common';
import { CreateTaskDTO } from '../dtos/task.dto';
import { PrismaClient } from '@prisma/client';
const { task } = new PrismaClient();

@Injectable()
export class TaskService {
  async getAllTasks() {
    return await task.findMany();
  }

  async searchTask(taskID: number) {
    return await task.findUnique({
      where: {
        id: taskID,
      },
    });
  }

  async newTask(newTaskDetails: CreateTaskDTO) {
    return await task.create({
      data: newTaskDetails,
    });
  }

  async deleteTask(taskID: number) {
    return await task.delete({
      where: {
        id: taskID,
      },
    });
  }
}
