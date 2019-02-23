import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PhotoInterface {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<PhotoInterface[]> {
    return this.http.get<PhotoInterface[]>('https://jsonplaceholder.typicode.com/photos').pipe(map(data => data.slice(0, 10)));
  }

}
