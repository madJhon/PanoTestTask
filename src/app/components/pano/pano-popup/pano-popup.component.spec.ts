import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoPopupComponent } from './pano-popup.component';

describe('PanoPopupComponent', () => {
  let component: PanoPopupComponent;
  let fixture: ComponentFixture<PanoPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanoPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
