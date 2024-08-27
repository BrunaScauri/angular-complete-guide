import { Component, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!:string;
  isAddingTask = false;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master angular',
      summary: 'Learn all the basics and advanced angular features',
      dueDate: '2525-12-31'
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master javascript',
      summary: 'Learn all the basics and advanced js features',
      dueDate: '2525-12-31'
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Master c#',
      summary: 'Learn all the basics and advanced c# features',
      dueDate: '2525-12-31'
    },
  ];

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId == this.userId)
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task => task.id !== id))
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

}
