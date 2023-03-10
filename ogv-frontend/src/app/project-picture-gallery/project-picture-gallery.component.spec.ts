import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPictureGalleryComponent } from './project-picture-gallery.component';

describe('ProjectPictureGalleryComponent', () => {
  let component: ProjectPictureGalleryComponent;
  let fixture: ComponentFixture<ProjectPictureGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectPictureGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPictureGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
