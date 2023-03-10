import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryanlegenComponent } from './galleryanlegen.component';

describe('GalleryanlegenComponent', () => {
  let component: GalleryanlegenComponent;
  let fixture: ComponentFixture<GalleryanlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryanlegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryanlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
