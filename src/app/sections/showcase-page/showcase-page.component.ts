import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-page',
  templateUrl: './showcase-page.component.html',
  styleUrls: ['./showcase-page.component.scss']
})
export class ShowcasePageComponent implements OnInit {
  public isBeingRendered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public beingRendered(): void {
    this.isBeingRendered = !this.isBeingRendered;
  }
}
