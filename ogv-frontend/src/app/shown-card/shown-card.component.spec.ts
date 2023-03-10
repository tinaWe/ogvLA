import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowncardComponent } from './shown-card.component';

describe('ShowncardComponent', () => {
  let component: ShowncardComponent;
  let fixture: ComponentFixture<ShowncardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowncardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowncardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
