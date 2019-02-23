import { Component, OnInit, Input } from '@angular/core';

import { UserInterface } from '../../services/user.api.service';
import { UserStateService } from '../../services/user.state.service';


@Component({
  selector: 'user-preview',
  template: `<h3>UserPreview: {{user?.first_name}} {{user?.last_name}}</h3>`
})
export class UserPreviewComponent implements OnInit {

  @Input() id: number = 0;
  user: UserInterface = null;

  constructor(private stateService: UserStateService) {
  }

  ngOnInit() {
    this.stateService.getUser(this.id).subscribe(data => {
      this.user = data;
    });
  }

}