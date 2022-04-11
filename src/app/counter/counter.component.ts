import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  actions: number;

  constructor(private counterService: CounterService) {
    this.counterService.counterUpdated.subscribe((counter: number) => this.actions = counter);
  }

  ngOnInit() {
    this.actions = this.counterService.actions;
  }


}
