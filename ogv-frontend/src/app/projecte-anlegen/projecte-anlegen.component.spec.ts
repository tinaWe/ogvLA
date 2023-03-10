import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecteAnlegenComponent } from './projecte-anlegen.component';

describe('ProjecteAnlegenComponent', () => {
  let component: ProjecteAnlegenComponent;
  let fixture: ComponentFixture<ProjecteAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjecteAnlegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjecteAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
