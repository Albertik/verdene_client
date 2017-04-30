import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './todo-input.component.html',
})
export class TodoInputComponent {
  @Output() addTodo : EventEmitter<string> = new EventEmitter<string>();

  add(todoInput){
    this.addTodo.emit(todoInput.value);
    todoInput.value = '';
  }
}
