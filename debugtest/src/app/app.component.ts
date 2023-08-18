import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Define the form group
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Initialize the form group with form controls
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  // Submit form handler
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm);
      console.log('Form submitted:', this.userForm.value);
    }
  }
}
