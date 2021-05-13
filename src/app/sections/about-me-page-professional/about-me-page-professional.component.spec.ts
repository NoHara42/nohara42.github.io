import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePageProfessionalComponent } from './about-me-page-professional.component';

describe('AboutMePageProfessionalComponent', () => {
  let component: AboutMePageProfessionalComponent;
  let fixture: ComponentFixture<AboutMePageProfessionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMePageProfessionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMePageProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
