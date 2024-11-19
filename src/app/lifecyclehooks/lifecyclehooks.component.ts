import {
  AfterContentInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LifecyclehookchildComponent } from '../lifecyclehookchild/lifecyclehookchild.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lifecyclehooks',
  standalone: true,
  imports: [LifecyclehookchildComponent, CommonModule, FormsModule],
  templateUrl: './lifecyclehooks.component.html',
  styleUrl: './lifecyclehooks.component.css',
})
export class LifecyclehooksComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy
{
  isClicked: boolean = false;
  changeName = '';

  constructor() {
    console.log('Parent constructor');
  }

  ngOnInit(): void {
    console.log('Parent ngoninit');
  }
  ngOnChanges(): void {
    console.log('Parent ng on changes worked');
  }
  ngDoCheck() {
    console.log('Parent docheck');
  }
  ngOnDestroy(): void {
    console.log('Parent Destroyed');
  }

  toggled(): void {
    this.isClicked = !this.isClicked;
  }
}
