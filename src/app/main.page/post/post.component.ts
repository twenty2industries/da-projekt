import { Component } from '@angular/core';
import { Post } from '../../interfaces/post.interface';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent {
  posts: Post[] = [
    {
      img: [
        'assets/imgs/banana.jpg',
        '/assets/imgs/currant.jpg',
        '/assets/imgs/orange.jpg',
      ],
    },
  ];
}
