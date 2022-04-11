import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  inactiveCounter: number;
  activeCounter: number;

  constructor(private counterService: CounterService) {
    this.counterService.counterUpdated.subscribe((res: {counter: number, type: string}) => {
      if (res.type === 'active') {
        this.activeCounter = res.counter;
      } else {
        this.inactiveCounter = res.counter;
      }
    });
  }

  ngOnInit() {
    this.activeCounter = this.counterService.activeCounter;
    this.inactiveCounter = this.counterService.inactiveCounter;
  }
}
