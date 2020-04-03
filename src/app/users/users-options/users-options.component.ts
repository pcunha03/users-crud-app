import { Component } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DeleteConfirmationModalComponent} from '../../_helpers/delete-confirmation-modal/delete-confirmation-modal.component';
import {ToastrService} from 'ngx-toastr';
import {UsersService} from '../../_services/users.service';

@Component({
  selector: 'app-users-options',
  templateUrl: './users-options.component.html'
})
export class UsersOptionsComponent {
  editAllMode: boolean = false;

  constructor(private modalService: NgbModal,
              private toastr: ToastrService,
              private usersService: UsersService) { }

  // Delete all users with confirmation modal
  onDeleteAllUsers() {
    const modalRef = this.modalService.open(DeleteConfirmationModalComponent);
    modalRef.componentInstance.title = 'Delete all users?';
    modalRef.componentInstance.content = 'This operation is irreversible. Are you sure you want to proceed?';

    modalRef.result.then(() => {
      this.usersService.deleteAllUsers();
      this.toastr.success('All users deleted', 'Success');
    }, () => {});
  }

  // Toggle edit for all users
  onEditAllUsers() {
    this.editAllMode = true;
    this.usersService.toggleEditAllUsers.next(true);
  }

  // Save all users changes
  onSaveAllUsers() {
    this.usersService.saveAllUsers.next(true);
    this.editAllMode = false;
  }

}
