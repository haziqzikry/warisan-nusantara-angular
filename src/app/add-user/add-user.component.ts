import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  user: any = {};

  constructor(private userService: UserService) {}

  createUser(): void {
    this.userService.postUser(this.user).subscribe((response) => {
      // Handle the response as needed
      console.log(response);
    });
  }
}
