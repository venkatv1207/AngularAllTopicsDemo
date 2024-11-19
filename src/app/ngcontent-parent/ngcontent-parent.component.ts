import { Component } from '@angular/core';
import { NgcontentChildComponent } from '../ngcontent-child/ngcontent-child.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ngcontent-parent',
  standalone: true,
  imports: [NgcontentChildComponent, FormsModule, CommonModule],
  templateUrl: './ngcontent-parent.component.html',
  styleUrl: './ngcontent-parent.component.css',
})
export class NgcontentParentComponent {
  data1 = ['Xuv300', 'Xuv3XO', 'Xuv700', 'Xuv500'];
  price = ['Rs.16Lakh/-', 'Rs.18Lakh/-', 'Rs.30Lakh/-', 'Rs.25Lakh/-'];
}
