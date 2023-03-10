import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsInfo3Component } from './tipps-info3.component';

describe('TippsInfo3Component', () => {
  let component: TippsInfo3Component;
  let fixture: ComponentFixture<TippsInfo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippsInfo3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsInfo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
