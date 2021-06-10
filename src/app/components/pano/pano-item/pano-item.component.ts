import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-pano-item',
  templateUrl: './pano-item.component.html',
  styleUrls: ['./pano-item.component.scss'],
})
export class PanoItemComponent implements OnInit {
  @Input() member: Member | null;

  url: string;
  defaultUrl = '/assets/images/person_default_picture.jpg';
  showTooltip = false;

  constructor() {}

  ngOnInit(): void {
    this.url = this.member?.image_url || this.defaultUrl;
  }

  @HostListener('mouseover') onMouseEnter() {
    if (this.member) {
      this.showTooltip = true;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.showTooltip = false;
  }
}
