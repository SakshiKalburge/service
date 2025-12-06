import { Injectable } from "@angular/core";
import { Itodo2 } from "../models/todo";
import { Observable, of } from "rxjs";



@Injectable({
    providedIn:'root'
})

export class TodoService2{
    todoa : Itodo2[] = [
        {
            todoItem:'javascript',
            todoId:'111'
        },
        {
            todoItem:'Sass',
            todoId:'112'
        },

    ]

    fetchAllT () : Observable<Itodo2[]>{
        return of(this.todoa)
    }
}