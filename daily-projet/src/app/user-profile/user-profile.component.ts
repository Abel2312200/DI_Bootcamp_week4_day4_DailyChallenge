import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
// add user object 
user  = {
  firstName : 'Abel-Noel',
  lastName : 'Ngbandaman',
  userName : 'Akila',
  profilePictureUrl : 'https://mastertsmlille.files.wordpress.com/2022/04/image-1.jpg',
  age : 23
}

//  add getFullName function
getFullName() : string{
  return `${this.user.firstName} ${this.user.lastName}`;
}
}
