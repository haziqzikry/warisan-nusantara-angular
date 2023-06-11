import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css'],
})
export class GetUserComponent {
  user: any = {};
  id: number | null = null;

  constructor(private userService: UserService, private router: Router) {}

  getUserById(): void {
    if (this.id !== null && !isNaN(this.id)) {
      this.userService.getUserById(this.id).subscribe((user) => {
        this.user = user;
        console.log(this.user); // Example: log the selected user to the console

        // Update the URL with the ID parameter
        this.router.navigate(['/get-user', this.id]);
      });
    }
  }
}
