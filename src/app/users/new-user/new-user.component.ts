import { Component } from '@angular/core';
import {User} from '../../_models/user.model';
import {NgForm} from '@angular/forms';
import {UsersService} from '../../_services/users.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html'
})
export class NewUserComponent {
  name: string;

  constructor(private usersService: UsersService,
              private toastr: ToastrService) { }

  // Create new user
  onCreateUser(form: NgForm) {
    const newUser = new User(form.value.userName);
    this.usersService.addUser(newUser);
    this.toastr.success(`User ${newUser.name} created`, 'Success');
    form.resetForm();
    form.form.markAsPristine();
  }

}
