import { Component, OnInit } from '@angular/core';
import { UserApiService, UserInterface } from '../../../shared/services/user.api.service';


@Component({
  selector: 'users-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: UserInterface[] = null;

  constructor(private apiService: UserApiService) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe(data => {
      this.users = data;
    });
    
    this.apiService.listChanged.subscribe(
      () => {
        this.apiService.getUsers().subscribe(data => {
            this.users = data;
        });
      }
    );
  }
}
