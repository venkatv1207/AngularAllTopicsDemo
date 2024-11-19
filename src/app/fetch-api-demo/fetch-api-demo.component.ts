import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FetchingService } from '../fetching.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fetch-api-demo',
  standalone: true,
  imports: [CommonModule],
  providers: [FetchingService],
  templateUrl: './fetch-api-demo.component.html',
  styleUrl: './fetch-api-demo.component.css',
})
export class FetchApiDemoComponent implements OnInit {
  data: any;
  isLoading: boolean = false;

  constructor(private ft: FetchingService) {}

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.ft.getData().subscribe((data) => {
        this.data = data;
        this.isLoading = false;
      });
    }, 5000);
  }

  // fetchData(): void {
  //   this.isLoading = true;
  //   setTimeout(() => {
  //     this.ft.getData().subscribe((data) => {
  //       this.data = data;
  //       this.isLoading = false;
  //     });
  //   }, 5000);
  // }
}
