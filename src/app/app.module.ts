import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddtodoComponent } from './My-components/addtodo/addtodo.component';
import { TodositemComponent } from './My-components/todositem/todositem.component';
import { TodosComponent } from './My-components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './My-components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    AddtodoComponent,
    TodositemComponent,
    TodosComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
