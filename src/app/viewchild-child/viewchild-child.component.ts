import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-viewchild-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './viewchild-child.component.html',
  styleUrl: './viewchild-child.component.css',
})
export class ViewchildChildComponent {
  data: string = 'Data passed to parent';

  passtoParent() {
    return this.data;
  }
}
