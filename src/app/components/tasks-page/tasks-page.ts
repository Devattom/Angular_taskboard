import {Component, inject} from '@angular/core';
import {Task, Tasks } from "../../services/tasks";
import {Observable} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {
  taskService = inject(Tasks);
  tasks: Observable<Task[]> = this.taskService.tasks$;
  newTaskLabel : string = '';

  ngOnInit() {}

  ngOnDestroy() {}

  addTask(label: string) {
    this.taskService.addTask(label);
  }
}
