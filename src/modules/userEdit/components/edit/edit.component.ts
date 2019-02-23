import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserApiService, UserInterface } from '../../../shared/services/user.api.service';


@Component({
  selector: 'users-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: UserInterface = null;

  constructor(
      private apiService: UserApiService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      data => {
        this.apiService.getUser(data.id).subscribe(data => {
          this.user = data;
        });
      }
    );
  }

  save(): void {
    this.apiService.saveUser(this.user.id, this.user).subscribe(
      () => {
        this.apiService.listChanged.emit(true);
        this.router.navigate(['/users/list']);
      }
    );
  }

};