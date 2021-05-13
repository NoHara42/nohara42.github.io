import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePageHobbyComponent } from './about-me-page-hobby.component';

describe('AboutMePageHobbyComponent', () => {
  let component: AboutMePageHobbyComponent;
  let fixture: ComponentFixture<AboutMePageHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMePageHobbyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMePageHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
