import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <ul>
    <li><a routerLink = "/">About</a></li>
    <li><a routerLink = "user">User</a></li>
    <br />
    <hr />

  </ul>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent  { 
  
  }
