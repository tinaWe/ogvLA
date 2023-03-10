import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryImageSlideshowComponent } from './gallery-image-slideshow.component';

describe('GalleryImageSlideshowComponent', () => {
  let component: GalleryImageSlideshowComponent;
  let fixture: ComponentFixture<GalleryImageSlideshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryImageSlideshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryImageSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
