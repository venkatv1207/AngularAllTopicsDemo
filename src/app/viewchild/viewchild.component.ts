import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  viewChildren,
} from '@angular/core';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [ViewchildChildComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css',
})
export class ViewchildComponent {
  @ViewChild(ViewchildChildComponent) viewchild: any;
  @ViewChild('reference') ref: any;

  cdata = '';

  receive() {
    return (this.cdata = this.viewchild.passtoParent());
  }

  changeText() {
    this.ref.nativeElement.textContent = 'Hello from parent component';
    this.ref.nativeElement.style.color = 'red';
  }
}
