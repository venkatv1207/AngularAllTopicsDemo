import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structuraldirectives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structuraldirectives.component.html',
  styleUrl: './structuraldirectives.component.css',
})
export class StructuraldirectivesComponent {
  data = ['venkat', 'vadlakonda'];
  num: string[] = ['g', 'r', 'a', 'p', 'h'];
  fruits: string[] = ['Apple', 'banana', 'custard apple', 'mango'];

  mobiles = [
    {
      id: 1,
      name: 'samsung',
      price: 50000,
    },
    {
      id: 2,
      name: 'apple',
      price: 60000,
    },
    {
      id: 3,
      name: 'google',
      price: 70000,
    },
  ];

  num1: number = 1;
  num2: number = 2;
  option: any[] = ['+', '-', '/'];
}
