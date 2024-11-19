import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css',
})
export class FormValidationComponent {
  onLogin(form: any): void {
    let userObj = form.value;
    if (userObj.username !== 'admin') {
      alert('Invalid username');
    } else if (userObj.password !== 'admin') {
      alert('Invalid Password');
    } else {
      alert('Sucessfull');
    }
    console.log(userObj);
  }
}
