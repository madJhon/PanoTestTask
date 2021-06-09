import { Component, OnInit, Input } from '@angular/core';

import { Member } from '../../../models/member.model';

@Component({
  selector: 'app-pano-list',
  templateUrl: './pano-list.component.html',
  styleUrls: ['./pano-list.component.scss'],
})
export class PanoListComponent implements OnInit {
  @Input() rows = 20;
  @Input() columns = 30;

  @Input() members: Member[] = [];

  grid = new Map();
  gridKeys: number[] = [];

  constructor() { }

  private getRandomNumber() {
    const min = 1;
    const max = this.rows * this.columns;

    return Math.floor(Math.random() * (max - min) + min);
  }

  ngOnInit(): void {

    const gridSize = this.rows * this.columns;

    for (let i = 0; i < gridSize; i++) {
      this.grid.set(i, null);
    }

    this.members.forEach((member) => {

      while (1) {
        let position = this.getRandomNumber();

        if (!this.grid.get(position)) {
          this.grid.set(position, member)
          break;
        }
      }
    });

    this.gridKeys = [...this.grid.keys()];
  }
}
