import { Injectable, Component, EventEmitter, Input, Output} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cloneDeep } from 'lodash';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { flatMap, map, catchError, take, filter } from 'rxjs/operators';

import { UserInterface, UserApiService } from './user.api.service';

@Injectable()
export class UserStateService {
  
  private usersSubject: BehaviorSubject<UserInterface[]> = new BehaviorSubject<UserInterface[]>(null);
  private usersProcessed: boolean = false;
  
  constructor(private api: UserApiService) { }

  getUsers(reset = false): Observable<UserInterface[]> {
    if (!this.usersProcessed || reset) {
      this.usersProcessed = true;
      this.usersSubject.next(null);

      this.api.getUsers().pipe(catchError(() => []))
        .subscribe((data: UserInterface[]) => this.usersSubject.next(data));
    }
    return this.usersSubject.asObservable();
  }
  
  getUser(id: number): Observable<UserInterface> {
    return this.api.getUser(id);
  }

  saveUser(id: number, user: UserInterface): Observable<UserInterface> {
    return this.api.saveUser(id, user).pipe(flatMap(result => {
      return this.getUsers(true).pipe(filter(d => !!d), take(1), map(() => {
        return result;
      }));
    }));
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