import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewYorkComponent } from './new-york.component';

describe('NewYorkComponent', () => {
  let component: NewYorkComponent;
  let fixture: ComponentFixture<NewYorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewYorkComponent]
    });
    fixture = TestBed.createComponent(NewYorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
