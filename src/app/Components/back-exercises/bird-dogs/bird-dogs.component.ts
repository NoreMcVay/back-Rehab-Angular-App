import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BirdDogModalComponent } from 'src/app/Modals/bird-dog-modal/bird-dog-modal.component';

@Component({
  selector: 'app-bird-dogs',
  templateUrl: './bird-dogs.component.html',
  styleUrls: ['./bird-dogs.component.scss']
})
export class BirdDogsComponent implements OnInit {
  constructor(private router: Router,
              private modalService: NgbModal) { }


  exercises = [
    {
      reps: '12x bird-dog reps (left side, 10secs per 1x)',
    },
    {
      reps: '12x bird-dog reps (right side, 10secs per 1x)',
    },
    {
      reps: '10x bird-dog reps (left side, 10secs per 1x)',
    },
    {
      reps: '10x bird-dog reps (right side, 10secs per 1x)',
    },
    {
      reps: '8x bird-dog reps (left side, 8secs per 1x)',
    },
    {
      reps: '8x bird-dog reps (right side, 8secs per 1x)',
    },
  ];

  addExercise(addNewExercise) {
    const newExercise = {
      reps: addNewExercise,
    };
    this.exercises.push(newExercise);
  }

  open() {
    const modalRef = this.modalService.open(BirdDogModalComponent);
  }

  deleteExercise(deletedExercise) {
    this.exercises = this.exercises.filter((exercise) => exercise.reps !== deletedExercise.reps);
  }

  nextExercise() {
    this.router.navigate(['/mcgill-sit-ups']);
  }

  ngOnInit() {
  }

}
