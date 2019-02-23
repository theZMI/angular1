import { Component, OnInit } from '@angular/core';
import { ApiService, PhotoInterface } from '../../services/api.service';

@Component({
  selector: 'photos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  photos: PhotoInterface[] = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getPhotos().subscribe(data => {
      this.photos = data;
    });
  }

}
