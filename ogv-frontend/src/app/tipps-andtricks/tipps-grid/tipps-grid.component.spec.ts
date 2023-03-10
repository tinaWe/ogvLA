import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsGridComponent } from './tipps-grid.component';

describe('TippsGridComponent', () => {
  let component: TippsGridComponent;
  let fixture: ComponentFixture<TippsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippsGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
