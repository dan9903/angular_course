import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styles: [`
    .fifthPlus {
      color: white;
    }
  `]
})
export class AssignmentThreeComponent implements OnInit {
  displayDetails: boolean = false;
  clicks = [];

  constructor() { }

  ngOnInit() {

  }

  onToggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.clicks.push(Date.now().toString());
  }

  getColor(indexOf: number) {
    return indexOf < 4? 'white': 'blue';
  }
}
