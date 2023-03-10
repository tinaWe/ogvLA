import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektTemplateComponent } from './projekt-template.component';

describe('ProjektTemplateComponent', () => {
  let component: ProjektTemplateComponent;
  let fixture: ComponentFixture<ProjektTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
