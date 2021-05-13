import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.scss']
})
export class ContentsPageComponent implements OnInit {
  public isBeingRendered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public beingRendered(): void {
    this.isBeingRendered = !this.isBeingRendered;
  }
}
