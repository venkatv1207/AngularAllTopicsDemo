import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formsangular',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formsangular.component.html',
  styleUrl: './formsangular.component.css',
})
export class FormsangularComponent {
  user = {
    name: '',
    age: null,
    number: null,
  };
  submitForm(form: any): void {
    console.log(this.user);
    this.user = form.value;
  }

  submitted: any = null;
  onSubmit(form: any) {
    this.submitted = form.value;
  }
}
