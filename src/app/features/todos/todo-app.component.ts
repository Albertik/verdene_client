import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState, Todo, TodoModel} from "../../common/interfaces";
import {Observable} from "rxjs/Observable";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, UNDO, REDO} from '../../common/actions';

@Component({
    selector: `todo-app`,
    templateUrl: './todo-app.component.html',
    styleUrls: ['./todo-app.component.sass']
})
export class TodoAppComponent {
    public todosModel$: Observable<TodoModel>;
    private id: number = 0;

    constructor(private _store: Store<AppState>) {
        const todos$ = _store.select('todos');
        const visibilityFilter$ = _store.select('visibilityFilter');

        this.todosModel$ = Observable
            .combineLatest(
                todos$,
                visibilityFilter$,
                ({present = []}, visibilityFilter: any) => {
                    return {
                        filteredTodos: present.filter(visibilityFilter),
                        totalTodos: present.length,
                        completedTodos: present.filter((todo: Todo) => todo.complete).length
                    }
                }
            );

    }

    addTodo(description: string) {
        this._store.dispatch({
            type: ADD_TODO, payload: {
                id: ++this.id,
                description,
                complete: false
            }
        });
    }

    removeTodo(id: number) {
        this._store.dispatch({type: REMOVE_TODO, payload: id});
    }

    toggleTodo(id: number) {
        this._store.dispatch({type: TOGGLE_TODO, payload: id});
    }

    updateFilter(filter) {
        this._store.dispatch({type: filter});
    }

    undo() {
        this._store.dispatch({type: UNDO});
    }

    redo() {
        this._store.dispatch({type: REDO});
    }
}
