import {Component, Input} from '@angular/core';
import {NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-confirmation-modal',
  templateUrl: './delete-confirmation-modal.component.html'
})
export class DeleteConfirmationModalComponent {
  @Input() title;
  @Input() content;

  constructor(public activeModal: NgbActiveModal) { }

}
