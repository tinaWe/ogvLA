import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternerBereichComponent } from './interner-bereich.component';

describe('InternerBereichComponent', () => {
  let component: InternerBereichComponent;
  let fixture: ComponentFixture<InternerBereichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternerBereichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternerBereichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
