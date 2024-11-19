import { Component } from '@angular/core';

@Component({
  selector: 'app-class-styledb',
  standalone: true,
  imports: [],
  templateUrl: './class-styledb.component.html',
  styleUrl: './class-styledb.component.css',
})
export class ClassStyledbComponent {
  isactive: boolean = true;
  check: boolean = true;
  //Style binding
  cvar: string = 'gray';
  nvar: string = 'red';
  myStyle: object = {
    color: 'green',
    background: 'grey',
    border: '5px solid black',
  };
}
