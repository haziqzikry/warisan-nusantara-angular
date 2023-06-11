import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'],
})
export class DeleteUserComponent implements OnInit {
  userId!: number; // Initialize with a default value

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userId = +params['id']; // Access the user ID from the route parameters
    });
  }

  deleteUser(): void {
    // Make an API call or perform deletion logic based on the user ID
    this.userService.deleteUser(this.userId).subscribe(() => {
      // Deletion successful, navigate back to the desired page
      this.router.navigate(['/get-users']);
    });
  }
}
