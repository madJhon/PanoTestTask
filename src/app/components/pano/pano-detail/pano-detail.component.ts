import { Component, Input, OnInit } from '@angular/core';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-pano-detail',
  templateUrl: './pano-detail.component.html',
  styleUrls: ['./pano-detail.component.scss']
})
export class PanoDetailComponent implements OnInit {

  @Input() member: Member | null;

  constructor() { }

  ngOnInit(): void {
  }

}
