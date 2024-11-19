import { Component, Directive, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-host-binding-listen',
  standalone: true,
  imports: [],
  templateUrl: './host-binding-listen.component.html',
  styleUrl: './host-binding-listen.component.css',
})
export class HostBindingListenComponent {
  @HostBinding('style.color') textcolor: string;
  constructor() {
    console.log((this.textcolor = 'green'));
  }
  @HostBinding('style.backgroundcolor')
  backgroundcolor!: String;
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundcolor = 'gray';
  }
}
