import { Component, OnInit } from '@angular/core';
import { TaskModel } from './../interface/task-model';
import { TaskService } from './../service/task.service';
import { MyDialogComponent } from './../my-dialog/my-dialog.component';
import { MatDialogModule, MatDialog } from '@angular/material';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.css']
})
export class TaskHomeComponent implements OnInit {

  // Necessary variable declarations which will be used in html
  taskList: TaskModel[] = [];
  dialogResult: string;

  // Declare variable to use task service.
  constructor(private _taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit() {
    // Get list of tasks when component is initialized using service.
    this.taskList = this._taskService.getTask();
  }

  openDialog() {
    // Setting size of dialog box
    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      data: 'Enter task details'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }

}
