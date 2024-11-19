import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputdecorator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inputdecorator.component.html',
  styleUrl: './inputdecorator.component.css',
})
export class InputdecoratorComponent {
  @Input() childData: string = '';
  @Input() data1: number[] = [];
}
