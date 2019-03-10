import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-sql-errors',
  templateUrl: './sql-errors.component.html',
  styleUrls: ['./sql-errors.component.css']
})
export class SqlComponent {
  modalRef: BsModalRef;

  constructor(private router: Router, private modalService: BsModalService) {
  }
  redirectToHomePage(){
    this.router.navigate(['/']);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}

