import { EventEmitter } from '@angular/core';

export class CounterService {
  activeCounter = 0;
  inactiveCounter = 0;
  counterUpdated = new EventEmitter<{counter: number, type: string}>();

  increaseCounter(type: string): void {
    let counter = 0;
    if (type === 'active') {
      counter = ++this.activeCounter;
    } else {
      counter = ++this.inactiveCounter;
    }
    this.counterUpdated.emit( {counter, type});
  }
}
