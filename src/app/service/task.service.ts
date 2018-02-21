import { Injectable } from '@angular/core';
import { TaskModel } from './../interface/task-model';

@Injectable()
export class TaskService {

  taskList: TaskModel[] = [];
  task: TaskModel;

  constructor() { }

  // Get all tasks
  getTask(): TaskModel[] {
    return this.taskList;
  }

  // Adds tasks to array.
  addTask(task: TaskModel) {
    this.taskList.unshift(task);
  }

}
