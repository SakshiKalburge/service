import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { Observable, of } from "rxjs";




@Injectable({
    providedIn : 'root'
})

export class TodoService{

    todoArray: Itodo[] = [
        {
            todoItem : 'Angular',
            todoId: '101'
        },
        {
            todoItem : 'Typescript',
            todoId: '102'
        }
    ]

      fetchAlltodos (): Observable<Itodo[]>{
        return of(this.todoArray)
    }

}

  