import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs'

import { Member } from './models/member.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PanoTestTask';
  members$: Observable<Member[]>;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.members$ = this.httpClient.get<Member[]>("/assets/data/members.json");
  }
}
