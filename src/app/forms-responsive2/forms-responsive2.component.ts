import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
interface User {
  name: string;
  age: number;
  email: string;
}

@Component({
  selector: 'app-forms-responsive2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './forms-responsive2.component.html',
  styleUrl: './forms-responsive2.component.css',
})
export class FormsResponsive2Component {
  users: User[] = []; // Store user data
  name: string = ''; // Form field for name
  age: number | null = null; // Form field for age
  email: string = ''; // Form field for email
  editingIndex: number | null = null; // Index for editing

  // Submit form to add a new user
  addUser() {
    if (this.name && this.age !== null && this.email) {
      this.users.push({ name: this.name, age: this.age!, email: this.email });
      this.resetForm(); // Reset the form
    }
  }

  // Set values for editing
  editUser(index: number) {
    this.editingIndex = index; // Set editing index
    const user = this.users[index];
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
  }

  // Save edited user
  saveUser(index: number) {
    this.users[index] = { name: this.name, age: this.age!, email: this.email };
    this.resetForm(); // Reset the form
  }

  // Delete user from the list
  deleteUser(index: number) {
    this.users.splice(index, 1);
  }

  // Reset form fields
  resetForm() {
    this.name = '';
    this.age = null;
    this.email = '';
    this.editingIndex = null; // Reset editing index
  }
}
