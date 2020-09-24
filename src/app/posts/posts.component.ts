import { Component, OnInit } from '@angular/core';

interface Post {
  name: string;
  author: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {

  posts: Post[];
  selectedBook: string;
  username: string;

  constructor() {
    this.posts = [
      {name: 'Post 1', author: 'Author1'},
      {name: 'Post 2', author: 'Author2'},
      {name: 'Post 3', author: 'Author3'},
      {name: 'Post 4', author: 'Author4'},
      {name: 'Post 5', author: 'Author5'}
  ];

   }

  ngOnInit(): void {
  }

}
