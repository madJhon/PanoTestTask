import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoDetailComponent } from './pano-detail.component';

describe('PanoDetailComponent', () => {
  let component: PanoDetailComponent;
  let fixture: ComponentFixture<PanoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
