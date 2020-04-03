import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersOptionsComponent } from './users-options.component';

describe('UsersOptionsComponent', () => {
  let component: UsersOptionsComponent;
  let fixture: ComponentFixture<UsersOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
