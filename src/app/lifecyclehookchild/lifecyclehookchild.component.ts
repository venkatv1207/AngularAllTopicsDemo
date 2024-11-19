import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-lifecyclehookchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lifecyclehookchild.component.html',
  styleUrl: './lifecyclehookchild.component.css',
})
export class LifecyclehookchildComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  count = 0;
  interval: any;
  @Input()
  changeName = '';

  @ContentChild('projected') projected: any; //for ngaftercontentinit
  @ViewChild('childView') childView: any;

  constructor() {
    console.log('Child constructor');
  }

  ngOnInit(): void {
    console.log('Child ngOnInit');
    this.interval = setInterval(() => {
      this.count++;
      console.log(this.count); //memory leak so we need to cleanup
    }, 1000);
    console.log('oninit' + this.projected);
    console.log('oninit' + this.childView);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('child ng on changes worked', changes);
    console.log('changes:' + this.projected);
    console.log('changes' + this.childView);
  }
  ngDoCheck() {
    console.log('Child docheck');
    console.log('docheck:' + this.projected);
    console.log('docheck' + this.childView);
  }
  ngAfterContentInit(): void {
    console.log('After content init');
    console.log('afterinit' + this.projected);
  }
  ngAfterContentChecked(): void {
    console.log('ng after content checked');
  }
  ngAfterViewInit(): void {
    console.log('ng after view init');
    console.log('ng after view init' + this.childView);
  }
  ngAfterViewChecked(): void {
    console.log('ng after view checked');
  }

  ngOnDestroy(): void {
    console.log('child destroyed');
    clearInterval(this.interval); //so here we are cleanup the interval
  }
}
