import { Component, OnInit } from '@angular/core';
import { Itodo } from '../models/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArray: Itodo[] = []

  constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._todoService.fetchAlltodos().subscribe(res =>{
      this.todoArray = res
    }
  )
  console.log(this.todoArray);
  
  }

}
