import { Component } from '@angular/core';
import { CreateupdatedeleteService } from '../createupdatedelete.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createupdatedelete',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [CreateupdatedeleteService],
  templateUrl: './createupdatedelete.component.html',
  styleUrl: './createupdatedelete.component.css',
})
export class CreateupdatedeleteComponent {
  posts: any[] = [];

  constructor(private apiService: CreateupdatedeleteService) {}

  ngOnInit(): void {
    this.getPosts(); // Fetch data on component initialization
  }

  // Fetch posts using GET
  getPosts(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.posts = data;
      console.log('Fetched posts:', this.posts);
    });
  }

  // Create a new post using POST
  createPost(): void {
    const newPost = {
      title: 'New Post',
      body: 'This is a new post',
      userId: 1,
    };
    this.apiService.createPost(newPost).subscribe((data) => {
      console.log('Post created:', data);
      this.getPosts(); // Refresh the posts list
    });
  }

  // Update an existing post using PUT
  updatePost(id: number): void {
    const updatedPost = {
      title: 'Updated Post',
      body: 'This post has been updated',
      userId: 1,
    };
    this.apiService.updatePost(id, updatedPost).subscribe((data) => {
      console.log('Post updated:', data);
      this.getPosts(); // Refresh the posts list
    });
  }

  // Delete a post using DELETE
  deletePost(id: number): void {
    this.apiService.deletePost(id).subscribe((data) => {
      console.log('Post deleted:', data);
      this.getPosts(); // Refresh the posts list
    });
  }
}
