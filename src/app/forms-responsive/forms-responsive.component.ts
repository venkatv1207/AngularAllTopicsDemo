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
  selector: 'app-forms-responsive',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms-responsive.component.html',
  styleUrl: './forms-responsive.component.css',
})
export class FormsResponsiveComponent {
  users: User[] = []; // Store user data
  name: string = ''; // Form field for name
  age: number | null = null; // Form field for age
  email: string = ''; // Form field for email
  editingIndex: number | null = null; // Index for editing

  // Submit form to add/edit user
  submitForm() {
    if (this.editingIndex !== null) {
      // Edit existing user
      this.users[this.editingIndex] = {
        name: this.name,
        age: this.age!,
        email: this.email,
      };
      this.editingIndex = null; // Reset editing index
    } else {
      // Add new user
      this.users.push({ name: this.name, age: this.age!, email: this.email });
    }
    this.resetForm(); // Reset the form
  }

  // Set form values for editing
  editUser(index: number) {
    const user = this.users[index];
    this.name = user.name;
    this.age = user.age;
    this.email = user.email;
    this.editingIndex = index; // Set editing index
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
    this.editingIndex = null; // Reset editing index on form reset
  }
}
