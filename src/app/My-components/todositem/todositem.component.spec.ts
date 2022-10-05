import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodositemComponent } from './todositem.component';

describe('TodositemComponent', () => {
  let component: TodositemComponent;
  let fixture: ComponentFixture<TodositemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodositemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodositemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
