import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeraeteAusleiheComponent } from './geraete-ausleihe.component';

describe('GeraeteAusleiheComponent', () => {
  let component: GeraeteAusleiheComponent;
  let fixture: ComponentFixture<GeraeteAusleiheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeraeteAusleiheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeraeteAusleiheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
