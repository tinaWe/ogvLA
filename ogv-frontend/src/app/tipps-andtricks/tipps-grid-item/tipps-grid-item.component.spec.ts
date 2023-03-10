import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsGridItemComponent } from './tipps-grid-item.component';

describe('TippsGridItemComponent', () => {
  let component: TippsGridItemComponent;
  let fixture: ComponentFixture<TippsGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippsGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
