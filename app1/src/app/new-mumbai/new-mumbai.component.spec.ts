import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMumbaiComponent } from './new-mumbai.component';

describe('NewMumbaiComponent', () => {
  let component: NewMumbaiComponent;
  let fixture: ComponentFixture<NewMumbaiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewMumbaiComponent]
    });
    fixture = TestBed.createComponent(NewMumbaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
