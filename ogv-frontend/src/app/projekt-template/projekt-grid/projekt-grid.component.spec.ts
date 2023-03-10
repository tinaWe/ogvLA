import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektGridComponent } from './projekt-grid.component';

describe('ProjektGridComponent', () => {
  let component: ProjektGridComponent;
  let fixture: ComponentFixture<ProjektGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
