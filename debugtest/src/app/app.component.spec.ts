import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AppComponent]
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 it('should create the app', ()=>{
      expect(component).toBeTruthy();
 })

 it('should render form controls and submit button', () => {
  const formControls = fixture.debugElement.queryAll(By.css('input'));
  const submitButton = fixture.debugElement.query(By.css('button'));

  expect(formControls.length).toBe(3);
  expect(submitButton).toBeTruthy();
});

it('should validate form fields', () => {
  const nameInput = component.userForm.get('name');
  if (nameInput) {
    nameInput.setValue('');
    expect(nameInput.valid).toBeFalsy();
    expect(nameInput.errors?.['required']).toBeTruthy();
  }

  const emailInput = component.userForm.get('email');
  if (emailInput) {
  emailInput.setValue('invalid-email');
  expect(emailInput.valid).toBeFalsy();
  expect(emailInput.errors?.['email']).toBeTruthy();
  }

  const ageInput = component.userForm.get('age');
  if (ageInput) {
  ageInput.setValue(15);
  expect(ageInput.valid).toBeFalsy();
  expect(ageInput.errors?.['min']).toBeTruthy();
  }
});

it('should submit valid form', () => {
  spyOn(console, 'log');
  const form = component.userForm;
  form.patchValue({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25
  });

  component.onSubmit();
  expect(console.log).toHaveBeenCalledWith('Form submitted:', form.value);
});


it('should not submit invalid form', () => {
  spyOn(console, 'log');
  component.onSubmit();
  expect(console.log).not.toHaveBeenCalled();
});

});
