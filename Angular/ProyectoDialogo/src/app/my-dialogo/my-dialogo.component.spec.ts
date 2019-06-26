import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDialogoComponent } from './my-dialogo.component';

describe('MyDialogoComponent', () => {
  let component: MyDialogoComponent;
  let fixture: ComponentFixture<MyDialogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDialogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDialogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
