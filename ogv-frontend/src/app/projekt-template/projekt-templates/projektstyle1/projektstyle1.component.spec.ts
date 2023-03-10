import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projektstyle1Component } from './projektstyle1.component';

describe('Projektstyle1Component', () => {
  let component: Projektstyle1Component;
  let fixture: ComponentFixture<Projektstyle1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projektstyle1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Projektstyle1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
