import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DebounceService {
  constructor() {}

  search(query: string): Observable<string[]> {
    // Mocked search results
    const mockResults = [
      'Apple',
      'Banana',
      'Cherry',
      'Date',
      'Elderberry',
      'Fig',
      'Grape',
    ].filter((item) => item.toLowerCase().includes(query.toLowerCase()));

    return of(mockResults).pipe(delay(500)); // Simulate network delay
  }
}
