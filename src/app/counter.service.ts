import { EventEmitter } from '@angular/core';

export class CounterService {
  actions = 0;
  counterUpdated = new EventEmitter<number>();

  add() {
    this.actions++;
    this.counterUpdated.emit(this.actions);
  }
}
