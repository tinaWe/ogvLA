import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsInfo2Component } from './tipps-info2.component';

describe('TippsInfo2Component', () => {
  let component: TippsInfo2Component;
  let fixture: ComponentFixture<TippsInfo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippsInfo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
