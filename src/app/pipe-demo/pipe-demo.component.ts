import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewpipeDemoPipe } from '../newpipe-demo.pipe';

@Component({
  selector: 'app-pipe-demo',
  standalone: true,
  imports: [CommonModule, NewpipeDemoPipe],
  templateUrl: './pipe-demo.component.html',
  styleUrl: './pipe-demo.component.css',
})
export class PipeDemoComponent {
  name = 'venkat';
  salary: number = 78000;
  user1 = {
    name: this.name,
    age: 25,
  };
  dob = new Date();

  person = {
    name: this.name,
    age: 23,
  };

  wish: string = 'welcome  custom pipe';
  demo: string = 'male';
}
