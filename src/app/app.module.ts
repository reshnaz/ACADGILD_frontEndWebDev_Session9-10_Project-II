import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { taskRouting } from './routes/task.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskService } from './service/task.service';
import { MyMouseOverDirective } from './custom-directives/my-mouse-over.directive';
import { MatCardModule, MatButtonModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TaskHomeComponent,
    TaskListComponent,
    MyMouseOverDirective,
    MyDialogComponent
  ],
  entryComponents: [MyDialogComponent],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, taskRouting, MatCardModule, MatButtonModule, MatDialogModule, BrowserAnimationsModule
  ],
  providers: [TaskService, { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
