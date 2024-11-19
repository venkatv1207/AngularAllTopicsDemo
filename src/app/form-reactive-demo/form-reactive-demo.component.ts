import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-reactive-demo.component.html',
  styleUrl: './form-reactive-demo.component.css',
})
export class FormReactiveDemoComponent {
  myForm = new FormGroup({
    name: new FormControl('Sammy'),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
  }
  //validation form

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  print: any;
  // Submit handler
  inSubmit(form: FormGroup) {
    if (this.userForm.valid) {
      console.log('Form Data:', this.userForm.value);
      this.print = form.value.name;
    } else {
      console.log('Form is invalid');
    }
  }
}
