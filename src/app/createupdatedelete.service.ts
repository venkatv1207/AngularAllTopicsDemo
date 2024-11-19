import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CreateupdatedeleteService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // Example API

  constructor(private http: HttpClient) {}

  // GET request to fetch data
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // POST request to create data
  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);
  }

  // PUT request to update data
  updatePost(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  // DELETE request to delete data
  deletePost(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
