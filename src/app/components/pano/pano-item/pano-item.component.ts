import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-pano-item',
  templateUrl: './pano-item.component.html',
  styleUrls: ['./pano-item.component.scss']
})
export class PanoItemComponent implements OnInit {
  @Input() member: Member;

  url: string = "/assets/images/person_default_picture.jpg";

  constructor() { }

  ngOnInit(): void {
    if (this.member) {
      this.url = this.member.image_url;
    }
  }

}
