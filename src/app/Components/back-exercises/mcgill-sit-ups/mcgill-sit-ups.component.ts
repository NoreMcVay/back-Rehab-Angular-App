import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SitUpModalComponent } from 'src/app/Modals/sit-up-modal/sit-up-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-mcgill-sit-ups',
  templateUrl: './mcgill-sit-ups.component.html',
  styleUrls: ['./mcgill-sit-ups.component.scss']
})
export class McgillSitUpsComponent implements OnInit {
  constructor(private router: Router,
              private modalService: NgbModal) {}

  exercises = [
    {
      reps: '15x McGill Sit ups (10secs per 1x)',
    },
    {
      reps: '10x McGill Sit ups (10secs per 1x)',
    },
    {
      reps: '5x McGill Sit ups (10secs per 1x)',
    }
  ];

  addExercise(addNewExercise) {
    const newExercise = {
      reps: addNewExercise,
    };
    this.exercises.push(newExercise);
  }

  deleteExercise(deletedExercise) {
    this.exercises = this.exercises.filter((exercise) => exercise.reps !== deletedExercise.reps);
  }

  nextExercise() {
    this.router.navigate(['/side-planks']);
  }

  open() {
    const modalRef = this.modalService.open(SitUpModalComponent);
  }

  ngOnInit() {
  }

}
