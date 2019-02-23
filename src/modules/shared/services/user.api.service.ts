import { Injectable, Component, EventEmitter, Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cloneDeep } from 'lodash';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserInterface {
  id?: number;
  name?: string;
}

/*
window['test'] = [
  {id:4,first_name:"Eve",last_name:"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},
  {id:5,first_name:"Charles",last_name:"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},
  {id:6,first_name:"Tracey",last_name:"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}
];*/

@Injectable()
export class UserApiService {
  
  readonly ROOT_URL = 'http://t.local/api/';
  /*
  private list: UserInterface[] = [
    {id:4,first_name:"Eve",last_name:"Holt","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},
    {id:5,first_name:"Charles",last_name:"Morris","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},
    {id:6,first_name:"Tracey",last_name:"Ramos","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}
  ]; // window['test'];
  */

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.ROOT_URL + 'users');
  }
  
  getUser(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.ROOT_URL + 'users/' + id);
  }

  saveUser(id: number, user: UserInterface): Observable<UserInterface> {
    return this.http.patch<UserInterface>(this.ROOT_URL + 'users/' + id, user);
  }

/*
  getUsers(): Observable<UserInterface[]> {
    return of(cloneDeep(this.list));
  }
  
  getUser(id: number): Observable<UserInterface> {
    return of(cloneDeep(this.list.find(item => item.id === Number(id))));
  }

  saveUser(id: number, user: UserInterface): Observable<UserInterface> {
    let current = this.list.find(item => item.id === Number(id));
    Object.assign(current, user);
    return of(cloneDeep(current));
  }*/
};