import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoItemComponent } from './pano-item.component';

describe('PanoItemComponent', () => {
  let component: PanoItemComponent;
  let fixture: ComponentFixture<PanoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
