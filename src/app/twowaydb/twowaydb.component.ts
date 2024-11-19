import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-twowaydb',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twowaydb.component.html',
  styleUrl: './twowaydb.component.css',
})
export class TwowaydbComponent {
  username: string = '';
  userID: number = 0;
  islogged: boolean = true;
  toggleLogin() {
    this.islogged = !this.islogged;
  }
}
