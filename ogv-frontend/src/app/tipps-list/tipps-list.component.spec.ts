import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsListComponent } from './tipps-list.component';

describe('TippsListComponent', () => {
  let component: TippsListComponent;
  let fixture: ComponentFixture<TippsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
