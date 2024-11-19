import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchtermapiPipe } from '../searchtermapi.pipe';
import { SearchtermapiService } from '../searchtermapi.service';

@Component({
  selector: 'app-searchtermapi',
  standalone: true,
  imports: [FormsModule, CommonModule, SearchtermapiPipe],
  templateUrl: './searchtermapi.component.html',
  providers: [SearchtermapiService],
  styleUrl: './searchtermapi.component.css',
})
export class SearchtermapiComponent implements OnInit {
  data: any;
  searchterm: string = '';

  constructor(private search: SearchtermapiService) {}

  ngOnInit(): void {
    this.search.getdata().subscribe((items) => (this.data = items));
  }
}
