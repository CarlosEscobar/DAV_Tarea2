import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tarea2';
  tasks = [
    {
      "name":"Task1",
      "description":"Description1",
      "state":"Pendiente",
      "time":"1"
    },
    {
      "name":"Task2",
      "description":"Description2",
      "state":"Pendiente",
      "time":"2"
    },
    {
      "name":"Task3",
      "description":"Description3",
      "state":"Pendiente",
      "time":"3"
    },
    {
      "name":"Task4",
      "description":"Description4",
      "state":"Pendiente",
      "time":"4"
    },
    {
      "name":"Task5",
      "description":"Description5",
      "state":"Pendiente",
      "time":"5"
    }
  ];
}
