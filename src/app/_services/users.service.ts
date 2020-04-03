import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../_models/user.model';
import { map } from 'rxjs/operators';
import {Subject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_URL = 'https://uitest.free.beeceptor.com';
  private users: User[] = [];
  public usersChanged = new Subject<any>();
  public toggleEditAllUsers = new Subject<any>();
  public saveAllUsers = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  // Retrieve initial list of users
  getInitialUsers() {
    return this.httpClient.get<User[]>(`${this.API_URL}/usernames`)
      .pipe(
        map(
          (usernames: User[]) => {
            this.users = usernames;
            return [...this.users];
          }
        )
      );
  }

  // Get users list
  getUsers() {
    return [...this.users];
  }

  // Add new user to users list
  addUser(user: User) {
    this.users.push(user);
    this.usersChanged.next(this.getUsers());
  }

  // Edit user
  editUser(user: User) {
    const userIndex = this.users.indexOf(user);
    if (userIndex > -1) {
      this.users[userIndex] = user;
      this.usersChanged.next(this.getUsers());
    }
  }

  // Delete all the users
  deleteAllUsers() {
    this.users = [];
    this.usersChanged.next(this.getUsers());
  }

  // Delete one user
  deleteUser(user: User) {
    const userIndex = this.users.indexOf(user);
    if (userIndex > -1) {
      this.users.splice(userIndex, 1);
      this.usersChanged.next(this.getUsers());
    }
  }

}
