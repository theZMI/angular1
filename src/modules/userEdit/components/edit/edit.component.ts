import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserInterface } from '../../../shared/services/user.api.service';
import { UserStateService } from '../../../shared/services/user.state.service';


@Component({
  selector: 'users-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  user: UserInterface = null;

  constructor(
      private stateService: UserStateService,
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      data => {
        this.stateService.getUser(data.id).subscribe(data => {
          this.user = data;
        });
      }
    );
  }

  save(): void {
    this.stateService.saveUser(this.user.id, this.user).subscribe(
      () => {
        this.router.navigate(['/users/list']);
      }
    );
  }

};