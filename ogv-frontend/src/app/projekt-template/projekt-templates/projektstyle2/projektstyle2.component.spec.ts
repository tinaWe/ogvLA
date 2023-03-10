import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projektstyle2Component } from './projektstyle2.component';

describe('Projektstyle2Component', () => {
  let component: Projektstyle2Component;
  let fixture: ComponentFixture<Projektstyle2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projektstyle2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projektstyle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
