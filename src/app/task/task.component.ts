import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onTaskClick() {
    var sectionId = "task_" + this._name + "_content";
    document.getElementById(sectionId).style.display = "block";

    var stateMsgId = "task_" + this._name + "_statemsg";
    var stateMsg = document.getElementById(stateMsgId);
    if(this._state == "Pendiente") {
      stateMsg.innerText = "Pendiente -> En Proceso";
    }else if(this._state == "En Proceso") {
      stateMsg.innerText = "En Proceso -> Terminada";
    }else if(this._state == "Terminada") {
      stateMsg.innerText = "Terminada";
    }
  }

  changeState() {
    if(this._state == "Pendiente") {
      this._state = "En Proceso";
    }else if(this._state == "En Proceso") {
      this._state = "Terminada";
    }

    var sectionId = "task_" + this._name + "_content";
    document.getElementById(sectionId).style.display = "none";
  }

  cancelChangeState(){
    var sectionId = "task_" + this._name + "_content";
    document.getElementById(sectionId).style.display = "none";
  }

  @Input()
  get name(): string { return this._name; }
  set name(name: string) {
    this._name = name.trim();
  }
  private _name = '';

  @Input()
  get description(): string { return this._description; }
  set description(description: string) {
    this._description = description.trim();
  }
  private _description = '';

  @Input()
  get state(): string { return this._state; }
  set state(state: string) {
    this._state = state.trim();
  }
  private _state = '';

  @Input()
  get time(): string { return this._time; }
  set time(time: string) {
    this._time = time.trim();
  }
  private _time = '';

}
