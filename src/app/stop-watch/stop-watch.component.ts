import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  standalone: true,
  imports: [],
  templateUrl: './stop-watch.component.html',
  styleUrl: './stop-watch.component.css',
})
export class StopWatchComponent implements OnDestroy {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  intervalId: any;
  isRunning: boolean = false;

  startStopwatch(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => {
        this.incrementTime();
      }, 1000);
    }
  }

  pauseStopwatch(): void {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalId);
    }
  }

  resetStopwatch(): void {
    this.pauseStopwatch();
    this.hours = 0;
    this.minutes = 0;
    this.seconds = 0;
  }

  private incrementTime(): void {
    this.seconds++;
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
  }
  formatTime(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

  ngOnDestroy(): void {
    this.pauseStopwatch();
  }
}
