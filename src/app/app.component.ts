import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UsersService } from './users.services';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeUsers:  string[] = [];
  inactiveUsers:  string[] = [];

  constructor(private usersService: UsersService, private counterService: CounterService) {}

  ngOnInit(): void {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
  }
}
