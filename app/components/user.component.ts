import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'user',
  moduleId: module.id,
  templateUrl: 'user.component.html',
  providers : [PostService]
})
export class UserComponent  { 
  post: Post[];

  constructor(private postService : PostService){
      this.postService.getPost().subscribe(post => {
      this.post = post;
    })
  }
}

interface address{
  street: string;
  city: string;
  state: string;
  zip: number;
}
interface Post{
  id: number;
  name: string;
  username: string;
  email: string;
  address: address;
}