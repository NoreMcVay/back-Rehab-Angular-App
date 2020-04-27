import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, of, timer } from 'rxjs';
import { takeUntil, switchMap } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidePlanksModalComponent } from 'src/app/Modals/side-planks-modal/side-planks-modal.component';

@Component({
  selector: 'app-side-planks',
  templateUrl: './side-planks.component.html',
  styleUrls: ['./side-planks.component.scss']
})
export class SidePlanksComponent implements OnInit, OnDestroy {
  public tenSeconds = 10;
  public sixtySeconds = 60;
  public time: number = this.tenSeconds;
  public letsGoMessage = false;
  public restMessage = false;
  public wellDoneMessage = false;
  public lastRoundMessage = false;
  public showTime = false;
  plankCounterNumber = 0;
  myIntervals;
  public intervalSubscription;

  constructor(private modalService: NgbModal) { }

  open() {
    const modalRef = this.modalService.open(SidePlanksModalComponent);
  }

  startCountdown() {
    this.showTime = true;
    this.intervalSubscription = interval(1000).pipe(
      switchMap(intervalSecond => of(this.tenSeconds - 1 - intervalSecond)),
      takeUntil(timer((this.tenSeconds)  * 1000))
    )
    .subscribe(
        result => {
            this.time = result;
            console.log(this.time);
        },
        err => alert(err),
        ()  => {
            this.startInterval();
        }
    );
  }

  startInterval() {
    this.letsGoMessage = true;
    console.log('lets go!');
    setTimeout(() => {
      this.letsGoMessage = false;
    }, 1000);
    this.time = this.sixtySeconds;
    this.intervalSubscription = interval(1000).pipe( // 1/4
        switchMap(intervalSecond => of(this.sixtySeconds - 1 - intervalSecond)),
        takeUntil(timer((this.sixtySeconds) * 1000)) // 2/4
    )
    .subscribe(
        result => {
            this.time = result;
            console.log(this.time);
        },
        err => alert(err),
        ()  => {
            this.plankCounterNumber++;
            this.startRestCountdown();
        }
    );
  }

  startRestCountdown() {
    this.restMessage = true;
    console.log('rest!');
    setTimeout(() => {
      this.restMessage = false;
    }, 1000);
    this.intervalSubscription = interval(1000).pipe(
      switchMap(intervalSecond => of(this.tenSeconds - 1 - intervalSecond)),
      takeUntil(timer((this.tenSeconds)  * 1000))
    ).subscribe(
        result => {
            this.time = result;
            console.log(this.time);
        },
        err => alert(err),
        ()  => {
            this.restartTimer();
        }
    );
  }

  restartTimer() {
    this.lastRoundMessage = true;
    console.log('last round!');
    setTimeout(() => {
      this.lastRoundMessage = false;
    }, 1000);
    this.time = this.sixtySeconds;
    this.intervalSubscription = interval(1000).pipe( // 3/4
        switchMap(intervalSecond => of(this.sixtySeconds - 1 - intervalSecond)),
        takeUntil(timer((this.sixtySeconds) * 1000)) // 4/4
    )
    .subscribe(
        result => {
            this.time = result;
            console.log(this.time);
        },
        err => alert(err),
        ()  => {
            this.plankCounterNumber++;
            console.log('finished! well done!!');
            this.letsGoMessage = false;
            this.restMessage = false;
            this.wellDoneMessage = true;
        }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (!!this.intervalSubscription) {
        this.intervalSubscription.unsubscribe();
    }
  }


}
