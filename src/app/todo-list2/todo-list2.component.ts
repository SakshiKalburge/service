import { Component, OnInit } from '@angular/core';
import { Itodo2 } from '../models/todo';
import { TodoService2 } from '../service/t2.service';

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.scss']
})
export class TodoList2Component implements OnInit {

  todoa : Itodo2[] = []
  constructor(private _todoService2: TodoService2) { }

  ngOnInit(): void {
    this._todoService2.fetchAllT().subscribe(res =>{
      this.todoa = res
    }
  )
  console.log(this.todoa);
  
  }

}
