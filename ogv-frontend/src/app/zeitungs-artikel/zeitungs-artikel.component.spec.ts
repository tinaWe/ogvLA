import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeitungsArtikelComponent } from './zeitungs-artikel.component';

describe('ZeitungsArtikelComponent', () => {
  let component: ZeitungsArtikelComponent;
  let fixture: ComponentFixture<ZeitungsArtikelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZeitungsArtikelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeitungsArtikelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
