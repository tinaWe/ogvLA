import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippsAndtricksComponent } from './tipps-andtricks.component';

describe('TippsAndtricksComponent', () => {
  let component: TippsAndtricksComponent;
  let fixture: ComponentFixture<TippsAndtricksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippsAndtricksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TippsAndtricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
