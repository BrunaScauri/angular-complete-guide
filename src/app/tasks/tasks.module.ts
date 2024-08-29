import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task/task.component";

@NgModule ({
  declarations:[TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent], //I can only import the component used by the modules. In this case, only the 'tasks' is used.
  imports: [SharedModule, CommonModule, FormsModule]
})

export class TasksModule {}
