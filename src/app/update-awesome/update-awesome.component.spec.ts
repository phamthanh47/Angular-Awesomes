import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAwesomeComponent } from './update-awesome.component';

describe('UpdateAwesomeComponent', () => {
  let component: UpdateAwesomeComponent;
  let fixture: ComponentFixture<UpdateAwesomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAwesomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAwesomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
