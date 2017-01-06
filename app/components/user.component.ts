import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <h1>Hello, I am {{name}}</h1>
    <h2> Address : {{address.street}} {{address.city}}, {{address.state}}. {{address.zip}}</h2>
    <p>My E-mail is {{email}} <br> I am {{role}}</p>
    <button (click)="toggleHobbies()"> {{showHobbies ? "Hide" : "Show"}} Hobbies</button>
    <div *ngIf="showHobbies">
      <h3>Hobbies</h3>  
      <ul>
        <li *ngFor="let hobby of hobbies; let i = index">
        {{hobby}} <button (click)="deleteHobby(i)"> X </button>
        </li>
      </ul>
      <form (submit)="addHobby(hobby.value)">
            <label>Add Hobby: </label><br />
            <input id="hobby" type="text" #hobby /><br />
      </form>
    </div>
    <hr />
    <form>
      <label>Name:</label> <br />
      <input name="name" type="text" [(ngModel)] = "name"><br />
      <label>E-mail:</label> <br />
      <input name="email" type="text" [(ngModel)] = "email"><br />
      <label>Street:</label> <br />
      <input name="street" type="text" [(ngModel)] = "address.street"><br />
      <label>City:</label> <br />
      <input name="City" type="text" [(ngModel)] = "address.city"><br />
      <label>State:</label> <br />
      <input name="state" type="text" [(ngModel)] = "address.state"><br />
    </form>
  `,
})
export class UserComponent  { 
  name:string;
  email: string;
  role: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;


  constructor(){
    this.name = 'Utsav';
    this.email = 'utsavmaniyar@gmail.com';
    this.role = 'Angular JS Developer';
    this.hobbies = ['music', 'movies', 'cricket'];
    this.address = {
      street: '41 main st',
      city:'Phoenix',
      state: 'AZ', 
      zip: 85254
    }
    this.showHobbies=false;
  }
  toggleHobbies(){
    if(this.showHobbies==true){
      this.showHobbies = false;
    }
    else{
      this.showHobbies = true;
    }
  }
  addHobby(hobby){
    this.hobbies.push(hobby);
  }
  deleteHobby(i){
    this.hobbies.splice(i, 1);
  }
}

interface address{
  street: string;
  city: string;
  state: string;
  zip: number;
}
