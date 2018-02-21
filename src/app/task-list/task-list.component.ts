import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { TaskModel } from './../interface/task-model';
import { TaskService } from './../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {

  /* Input variable used to attribute task list in main component  */
  @Input() taskList;
  tasks: TaskModel[] = [];

  // Object of type "TaskModel" interface
  task: TaskModel;

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    // Get list of tasks when component is initialized using service.
    this.tasks = this._taskService.getTask();
  }

}
