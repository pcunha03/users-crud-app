import {Component, Input} from '@angular/core';
import {User} from '../../_models/user.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(500)
      ]),
      transition(':leave', animate(500, style({
        opacity: 0
      })))
    ])
  ]
})
export class UsersListComponent {
  @Input() users: User[];
  @Input() usersLoading: boolean;

}
