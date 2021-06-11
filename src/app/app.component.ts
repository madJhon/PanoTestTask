import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs'

import { Member } from './models/member.model';
import { MembersService } from './services/members.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PanoTestTask';
  members$: Observable<Member[]>;

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members$ = this.membersService.getMembers();
  }
}
