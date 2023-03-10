import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsAnlegenComponent } from './tipps-anlegen.component';

describe('TippsAnlegenComponent', () => {
  let component: TippsAnlegenComponent;
  let fixture: ComponentFixture<TippsAnlegenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippsAnlegenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsAnlegenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
