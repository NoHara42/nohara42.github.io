import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public isBeingRendered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public beingRendered(): void {
    this.isBeingRendered = !this.isBeingRendered;
  }
}
