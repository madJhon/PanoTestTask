import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

import {Member } from '../models/member.model';

export enum API {
  MEMBERS = 'api/members'
}

@Injectable({
  providedIn: 'root',
})
export class MembersService {

  constructor(private httpClient: HttpClient) {}

  getMembers(): Observable<any> {
    //return this.httpClient.get<Member[]>('/assets/data/members.json');
    return this.httpClient.get<Member[]>(`${API.MEMBERS}`).pipe(
      catchError(error => {
        console.log('getMembers error ', error);
        return of([]);
      })
    )
  }
}
