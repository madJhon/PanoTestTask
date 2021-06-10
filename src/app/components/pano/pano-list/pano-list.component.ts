import { Component, OnInit, Input } from '@angular/core';

import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-pano-list',
  templateUrl: './pano-list.component.html',
  styleUrls: ['./pano-list.component.scss'],
})
export class PanoListComponent implements OnInit {
  @Input() rows = 30;
  @Input() columns = 20;

  @Input() members: Member[] = [];

  gridMap: { [key: number]: Member } = {};

  constructor() { }

  private getRandomNumber() {
    return Math.floor(Math.random() * this.gridSize);
  }

  get gridSize() {
    return this.columns * this.rows;
  }

  get styles() {
    return {
      display: 'grid',
      'gap': '1px',
      'grid-template-columns': `repeat(${this.columns}, 50px)`,
      'grid-template-rows': `repeat(${this.rows}, 50px)`
    };
  }

  ngOnInit(): void {
    if (this.members.length > this.gridSize) {
      console.error('members more then grid cells');
      return;
    }

    if (this.members.length === this.gridSize) {
      this.members.forEach((member, index) => {
        this.gridMap[index] = member;
      });
      return;
    }

    this.members.forEach((member) => {
      while (1) {
        let position = this.getRandomNumber();

        if (!this.gridMap[position]) {
          this.gridMap[position] = member;
          break;
        }
      }
    });
  }
}
