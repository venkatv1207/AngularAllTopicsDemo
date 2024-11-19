import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-httpservice-demo',
  standalone: true,
  imports: [CommonModule],
  providers: [HttpClientModule],
  templateUrl: './httpservice-demo.component.html',
  styleUrl: './httpservice-demo.component.css',
})
export class HttpserviceDemoComponent {
  constructor(private http: HttpClient, private ds: DataService) {}
  data: any = null;

  getData() {
    this.http.get('https://fakestoreapi.com/products').subscribe((data) => {
      this.data = data;
    });
  }
}
//https://fakestoreapi.com/products
