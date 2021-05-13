import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-education-page',
  templateUrl: './education-page.component.html',
  styleUrls: ['./education-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EducationPageComponent implements OnInit {
  public isBeingRendered: boolean = false;

  public events = [
    {
      id: 0,
      title: 'Studying Digital Humanities',
      content: '<div>What is Digital Humanities?</div><br/><p /><div>Digital Humanities is a new field of research, which attempts to combine aspects of the computer sciences with the humanities.</div>',
      date: '2017 - Current',
      icon: "../../assets/deflag.png"
    },
    {
      id: 1,
      title: 'Completed A-Levels',
      content: '<div>A-Levels in:</div><p /><div>~ Mathematics, Physics, Chemistry (A-Levels)</div><div>~ Geology (AS)</div>',
      date: '2014 - 2016',
      icon: "../../assets/ukflag.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public beingRendered(): void {
    this.isBeingRendered = !this.isBeingRendered;
  }
}
