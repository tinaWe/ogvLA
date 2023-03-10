import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsInfo1Component } from './tipps-info1.component';

describe('TippsInfo1Component', () => {
  let component: TippsInfo1Component;
  let fixture: ComponentFixture<TippsInfo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippsInfo1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsInfo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
