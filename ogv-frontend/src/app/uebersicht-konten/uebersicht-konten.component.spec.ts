import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UebersichtKontenComponent } from './uebersicht-konten.component';

describe('UebersichtKontenComponent', () => {
  let component: UebersichtKontenComponent;
  let fixture: ComponentFixture<UebersichtKontenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UebersichtKontenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UebersichtKontenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
