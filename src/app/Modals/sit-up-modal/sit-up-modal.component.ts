import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sit-up-modal',
  templateUrl: './sit-up-modal.component.html',
  styleUrls: ['./sit-up-modal.component.scss']
})
export class SitUpModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

}
