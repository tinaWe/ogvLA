import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektGridItemComponent } from './projekt-grid-item.component';

describe('ProjektGridItemComponent', () => {
  let component: ProjektGridItemComponent;
  let fixture: ComponentFixture<ProjektGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjektGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjektGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
