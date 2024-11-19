import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outputdecorator',
  standalone: true,
  imports: [],
  templateUrl: './outputdecorator.component.html',
  styleUrl: './outputdecorator.component.css',
})
export class OutputdecoratorComponent {
  @Output() customevent = new EventEmitter();

  message = 'Message passed to parent';

  passtoParent() {
    this.customevent.emit(this.message);
  }
  updateMsg(data: any) {
    this.message = data.target.value;
  }

  //or

  @Output() messageSent: EventEmitter<string> = new EventEmitter<string>();

  sendMessage() {
    this.messageSent.emit('Hello from the child!');
  }
}
