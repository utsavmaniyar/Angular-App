import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li><a routerLink = "/">About</a></li>
        <li><a routerLink = "user">User</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  <div class = "jumbotron text-center">
    <h1>This is Angular 2 App</h1>
    <p>This app has example for routes, services, filter and bootstrap.</p>
  </div>
  <div class="container">
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent  { 
  
  }
