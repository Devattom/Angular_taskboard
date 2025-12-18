import {Component, inject, ViewChild, ViewContainerRef} from '@angular/core';
import {Task, Tasks } from "../../services/tasks";
import {Observable} from 'rxjs';
import {FormsModule} from '@angular/forms';
import {AsyncPipe} from '@angular/common';
import {TaskHighlight} from '../task-highlight/task-highlight';

@Component({
  selector: 'app-tasks-page',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './tasks-page.html',
  styleUrl: './tasks-page.css',
})
export class TasksPage {
  @ViewChild('highlightContainer', {read: ViewContainerRef})
  container!: ViewContainerRef;

  taskService = inject(Tasks);
  tasks: Observable<Task[]> = this.taskService.tasks$;
  newTaskLabel : string = '';

  ngOnInit() {}

  ngOnDestroy() {}

  highlight(task: Task) {
    this.container.clear();
    const ref = this.container.createComponent(TaskHighlight)
    ref.instance.title = task.label;
  }
  addTask(label: string) {
    this.taskService.addTask(label);
  }
}
