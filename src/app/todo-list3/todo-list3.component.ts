import { Component, OnInit } from '@angular/core';
import { Itodo3 } from '../models/todo';
import { TodoService3 } from '../service/t3.service';

@Component({
  selector: 'app-todo-list3',
  templateUrl: './todo-list3.component.html',
  styleUrls: ['./todo-list3.component.scss']
})
export class TodoList3Component implements OnInit {
 todoarr : Itodo3[] = []

  constructor(private _todoService3 : TodoService3){ }

  ngOnInit(): void {
    this._todoService3.fetchAll().subscribe(res =>{
      this.todoarr = res
    }
  )
console.log(this.todoarr);

  }

}
