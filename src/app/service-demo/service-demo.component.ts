import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service-demo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [TestService],
  templateUrl: './service-demo.component.html',
  styleUrl: './service-demo.component.css',
})
export class ServiceDemoComponent implements OnInit {
  mobile: any[] = [];
  constructor(private ts: TestService) {}

  ngOnInit(): void {
    this.mobile = this.ts.Mobiles;
  }
  add() {
    this.ts.Mobiles.push('Vivo');
  }
}
