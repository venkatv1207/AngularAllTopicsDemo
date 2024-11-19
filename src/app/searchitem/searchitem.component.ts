import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchitemPipe } from '../searchitem.pipe';

@Component({
  selector: 'app-searchitem',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchitemPipe],
  templateUrl: './searchitem.component.html',
  styleUrl: './searchitem.component.css',
})
export class SearchitemComponent {
  item: string[] = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Muskmelon'];
  searchterm: string = '';
}
