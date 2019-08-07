import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bootstrap';
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createValidations();
  }
  get formControls() {
    return this.registrationForm.controls;
  }

  save() {
    if (this.registrationForm.invalid) {
      console.log("invalid");
    } else {
      console.log("valid");

    }
  }

  createValidations() {
    this.registrationForm = this.fb.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: ['', [Validators.required, Validators.compose([
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ])]],
      age: ['', Validators.compose([Validators.required, Validators.pattern('(1[89]|[2-4][0-9]|50)')])],

    });
  }
}
