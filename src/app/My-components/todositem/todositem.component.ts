import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todositem',
  templateUrl: './todositem.component.html',
  styleUrls: ['./todositem.component.css']
})
export class TodositemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;
  @Input()
  i: number | undefined;
  @Output() TodoDelete:EventEmitter<Todo>=new EventEmitter();
  @Output() TodoCheckBox:EventEmitter<Todo>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo:Todo){
    this.TodoDelete.emit(todo);
    // console.log("Deleted The TODO");
  }

  onCheckBoxClick(todo:Todo){
    // console.log(todo);
    this.TodoCheckBox.emit(todo);
    // console.log(todo);
  }
}
