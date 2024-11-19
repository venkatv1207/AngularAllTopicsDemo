import { Component } from '@angular/core';

@Component({
  selector: 'app-eventdb',
  standalone: true,
  imports: [],
  templateUrl: './eventdb.component.html',
  styleUrl: './eventdb.component.css',
})
export class EventdbComponent {
  count: number = 0;
  Increment(): void {
    this.count++;
  }
  name: string = '';
  changeName(event: any): void {
    this.name = event.target.value;
  }
}
