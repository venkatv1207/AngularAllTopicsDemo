import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolationdb',
  standalone: true,
  imports: [],
  templateUrl: './interpolationdb.component.html',
  styleUrl: './interpolationdb.component.css',
})
export class InterpolationdbComponent {
  title: string = 'venkat Vadlakonda';
  x = 1;
  test() {
    return this.x + 1;
  }
  city: String = 'Siddipet';
  d: string = new Date().toLocaleDateString();
}
