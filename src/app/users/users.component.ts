import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/index';
import {User} from '../_models/user.model';
import {UsersService} from '../_services/users.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  users: User[];
  usersLoading: boolean = true;
  usersSubscription: Subscription;

  constructor(private usersService: UsersService,
              private toastr: ToastrService) { }

  ngOnInit() {
    // Load users from api
    this.usersService.getInitialUsers()
      .subscribe(
        (usernames: User[]) => {
          this.users = usernames;
        },
        error => {
          if (error) {
            this.toastr.error('An error occured while retrieve the users names', 'Error');
          }
        }
      )
      .add(
        () => {
          this.usersLoading = false;
        }
      );
    // Listen for users changes
    this.usersSubscription = this.usersService.usersChanged
      .subscribe(
        (users: User[]) => {
          this.users = this.usersService.getUsers();
        }
      );
  }
}
