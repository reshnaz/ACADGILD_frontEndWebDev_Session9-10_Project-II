import { Component, OnInit, Inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { TaskModel } from './../interface/task-model';
import { TaskService } from './../service/task.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {

  /* Necessary variable declarations which will be used in html */
  task: TaskModel;

  // Declaring 'f' of Type FormGroup
  f: FormGroup;

  id: number = 0;
  today = Date.now();

  constructor(private _taskService: TaskService, private _fbuilder: FormBuilder, public thisDialogRef: MatDialogRef<MyDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: TaskModel[]) { }

  ngOnInit() {
    /* Using FormBuilder and initializing the form controls within it
     along with validators */

    this.f = this._fbuilder.group({
      'taskName': ['', Validators.compose([Validators.required])],
      'taskDueDate': ['', Validators.compose([Validators.required])],
      'taskDescription': ['']
    });

  }

  // This function is called from html which in turn calls the functions in our task service.
  addTask(vals) {

    // Assign input values to interface variables.
    this.task = {
      id: this.id++,
      taskName: vals.taskName,
      taskDueDate: vals.taskDueDate,
      taskDescription: vals.taskDescription
    }

    // Set value to "N/A" if no value is entered by user for task description.
    if (this.task.taskDescription == "") {
      this.task.taskDescription = "N/A";
    }

    // Service function called to add task details to array
    this._taskService.addTask(this.task);

  }

  // Closes Dialog box and confirms the same.
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }

}
