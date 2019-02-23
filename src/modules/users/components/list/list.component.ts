import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../shared/services/user.api.service';
import { UserStateService } from '../../../shared/services/user.state.service';


@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: UserInterface[] = null;

  constructor(private stateService: UserStateService) { }

  ngOnInit() {
    this.stateService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
