import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoListComponent } from './pano-list.component';

describe('PanoListComponent', () => {
  let component: PanoListComponent;
  let fixture: ComponentFixture<PanoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
