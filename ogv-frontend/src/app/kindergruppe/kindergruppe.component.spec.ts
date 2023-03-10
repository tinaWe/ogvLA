import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindergruppeComponent } from './kindergruppe.component';

describe('KindergruppeComponent', () => {
  let component: KindergruppeComponent;
  let fixture: ComponentFixture<KindergruppeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KindergruppeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KindergruppeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
