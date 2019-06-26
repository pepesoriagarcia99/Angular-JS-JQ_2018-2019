import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecursoComponent } from './delete-recurso.component';

describe('DeleteRecursoComponent', () => {
  let component: DeleteRecursoComponent;
  let fixture: ComponentFixture<DeleteRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
