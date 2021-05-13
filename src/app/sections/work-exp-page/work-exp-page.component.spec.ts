import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExpPageComponent } from './work-exp-page.component';

describe('WorkExpPageComponent', () => {
  let component: WorkExpPageComponent;
  let fixture: ComponentFixture<WorkExpPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkExpPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkExpPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
