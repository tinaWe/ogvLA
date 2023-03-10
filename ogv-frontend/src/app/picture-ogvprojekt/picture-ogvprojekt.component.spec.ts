import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureOGVProjektComponent } from './picture-ogvprojekt.component';

describe('PictureOGVProjektComponent', () => {
  let component: PictureOGVProjektComponent;
  let fixture: ComponentFixture<PictureOGVProjektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PictureOGVProjektComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureOGVProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
