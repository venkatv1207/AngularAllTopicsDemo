import { Component, OnInit } from '@angular/core';
import { DebounceService } from '../debounce.service';
import { FormControl, FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-debounceing-example',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './debounceing-example.component.html',
  template: `<input
      [formControl]="searchControl"
      placeholder="Search here..."
    />
    <div *ngIf="results">
      <p *ngFor="let result of results">{{ result }}</p>
    </div>`,
  styleUrl: './debounceing-example.component.css',
})
export class DebounceingExampleComponent implements OnInit {
  searchControl = new FormControl(); // Reactive Form Control
  results: string[] = [];
  constructor(private searchService: DebounceService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300), // Wait 300ms after the last keystroke
        distinctUntilChanged(), // Trigger only if value changes
        switchMap((value) => this.searchService.search(value)) // Switch to new search observable
      )
      .subscribe((results) => {
        this.results = results; // Update results
      });
  }
}
