import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bird-dog-modal',
  templateUrl: './bird-dog-modal.component.html',
  styleUrls: ['./bird-dog-modal.component.scss']
})
export class BirdDogModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }


  ngOnInit() {
  }

}
