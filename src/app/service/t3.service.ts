import { Injectable } from "@angular/core";
import { Itodo3 } from "../models/todo";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn:'root'
})

export class TodoService3{
    todoarr : Itodo3[] = [
        {
            todoItem : 'Flex',
            todoId:'121'
        },
        {
            todoItem : 'Bootstrap',
            todoId:'122'
        }

    ]
    fetchAll (): Observable<Itodo3[]>{
        return of(this.todoarr)
    }
}