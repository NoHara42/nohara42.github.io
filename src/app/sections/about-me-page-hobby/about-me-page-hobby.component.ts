import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-page-hobby',
  templateUrl: './about-me-page-hobby.component.html',
  styleUrls: ['./about-me-page-hobby.component.scss']
})
export class AboutMePageHobbyComponent implements OnInit {
  public isBeingRendered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public beingRendered(): void {
    this.isBeingRendered = !this.isBeingRendered;
  }
}
