import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {User} from '../../_models/user.model';
import {UsersService} from '../../_services/users.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ToastrService} from 'ngx-toastr';
import {DeleteConfirmationModalComponent} from '../../_helpers/delete-confirmation-modal/delete-confirmation-modal.component';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/index';

@Component({
  selector: 'app-users-list-item',
  templateUrl: './users-list-item.component.html'
})
export class UsersListItemComponent implements OnInit {
  @Input() user: User;
  @ViewChild('editUserForm') editUserForm: NgForm;
  name: string;
  editMode: boolean = false;
  globalEditModeSubscription: Subscription;
  globalSaveAllUsersSubscription: Subscription;

  constructor(private usersService: UsersService,
              private modalService: NgbModal,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.name = this.user.name;
    // Listen for edit all action
    this.globalEditModeSubscription = this.usersService.toggleEditAllUsers
      .subscribe(
        (editMode: boolean) => {
          this.editMode = editMode;
        }
      );
    // Listen for all users save action
    this.globalSaveAllUsersSubscription = this.usersService.saveAllUsers
      .subscribe(
        (saveAll: boolean) => {
          if(saveAll) {
            this.onEditUser(this.editUserForm);
          }
        }
      );
  }

  // Delete user with confirmation modal
  onDeleteUser(user: User) {
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);
    modalRef.componentInstance.title = `Delete the user ${user.name}?`;
    modalRef.componentInstance.content = 'This operation is irreversible. Are you sure you want to proceed?';

    modalRef.result.then(() => {
      this.usersService.deleteUser(user);
      this.toastr.success(`The user ${user.name} was deleted`, 'Success');
    }, () => {});
  }

  // Update user name
  onEditUser(form: NgForm) {
    if(form && form.value && form.value.hasOwnProperty('userName')) {
      this.user.name = form.value.userName;
      this.usersService.editUser(this.user);
      this.toastr.success(`User ${this.user.name} updated`, 'Success');
      this.editMode = false;
    }
  }

  // Cancel edit user
  onCancelEdit() {
    this.editMode = false;
  }

}
