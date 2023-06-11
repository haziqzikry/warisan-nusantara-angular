import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  userId: number | null = null;
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.userId = Number(params.get('id'));
      this.getUserById();
    });
  }

  getUserById(): void {
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe((user) => {
        this.user = user;
      });
    }
  }

  updateUser(): void {
    if (this.userId) {
      this.userService
        .updateUser(this.userId, this.user)
        .subscribe((response) => {
          // Handle the response as needed
          console.log(response);
        });
    }
  }
}
