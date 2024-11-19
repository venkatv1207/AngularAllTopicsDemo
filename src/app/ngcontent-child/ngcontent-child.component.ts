import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ngcontent-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngcontent-child.component.html',
  styleUrl: './ngcontent-child.component.css',
})
export class NgcontentChildComponent {
  @Input() lists: any;
}
