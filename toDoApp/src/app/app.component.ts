import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoApp';
  tasks: Task[] = [];

  addToList(newTask: string) {
    this.tasks.push(new Task(newTask));
    console.log(this.tasks);
  }
}

class Task {
  constructor(public task_title: string) {

  }

}
