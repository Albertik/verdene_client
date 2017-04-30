
import {Component, ChangeDetectionStrategy, Input, Output, EventEmitter} from "@angular/core";
import {TodoModel} from "../../common/interfaces";

@Component({
  selector: 'todo-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent{
  @Input() todosModel : TodoModel[];
  @Output() removeTodo: EventEmitter<number> = new EventEmitter<number>();
  @Output() toggleTodo: EventEmitter<number> = new EventEmitter<number>();
}
