import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css'],
})
export class GetUserComponent implements OnInit {
  user: any = {};
  userId: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById(): void {
    if (this.userId !== null) {
      this.userService.getUserById(this.userId).subscribe((user) => {
        this.user = user;
        console.log(this.user); // Example: log the selected user to the console
      });
    }
  }
}
