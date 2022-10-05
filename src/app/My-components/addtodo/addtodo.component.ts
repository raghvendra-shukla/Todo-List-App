import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  title:string;
  desc:string;
  @Output() Todoadd:EventEmitter<Todo>=new EventEmitter();
  constructor() { 
    this.title="";
    this.desc="";
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo={
      sno:8,
      title:this.title,
      desc:this.desc,
      active: true
    }
    this.Todoadd.emit(todo);
  }
}
