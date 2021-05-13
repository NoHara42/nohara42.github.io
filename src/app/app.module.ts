import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './sections/landing-page/landing-page.component';
import { AboutMePageProfessionalComponent } from './sections/about-me-page-professional/about-me-page-professional.component';
import { AboutMePageHobbyComponent } from './sections/about-me-page-hobby/about-me-page-hobby.component';
import { EducationPageComponent } from './sections/education-page/education-page.component';
import { WorkExpPageComponent } from './sections/work-exp-page/work-exp-page.component';
import { ShowcasePageComponent } from './sections/showcase-page/showcase-page.component';
import { ContactPageComponent } from './sections/contact-page/contact-page.component';
import { ContentsPageComponent } from './sections/contents-page/contents-page.component';
import { DeferLoadModule } from '@trademe/ng-defer-load';
import { CommonModule } from '@angular/common';
import { ChartsModule } from '@rinminase/ng-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgVerticalTimelineModule } from 'ng-vertical-timeline';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutMePageProfessionalComponent,
    AboutMePageHobbyComponent,
    EducationPageComponent,
    WorkExpPageComponent,
    ShowcasePageComponent,
    ContactPageComponent,
    ContentsPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DeferLoadModule,
    CommonModule,
    ChartsModule,
    NgxSpinnerModule,
    NgVerticalTimelineModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
