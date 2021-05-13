import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  public isBeingRendered: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public beingRendered(): void {
    this.isBeingRendered = !this.isBeingRendered;
  }
}
