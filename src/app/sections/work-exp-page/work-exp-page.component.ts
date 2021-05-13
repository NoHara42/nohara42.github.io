import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-work-exp-page',
  templateUrl: './work-exp-page.component.html',
  styleUrls: ['./work-exp-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WorkExpPageComponent implements OnInit {
  public isBeingRendered: boolean = false;

  public events = [
    {
      id: 0,
      title: 'Front-End Developer (Working Student)',
      date: '2020 - Current',
      content: "<div>Rhode & Schwarz Cybersecurity</div><br/><p /><div>To preserve company confidentiality, I can't tell you what I'm working on.</div><div>However, <i>I really love building shiny things with Angular.</i></div>",
      icon: "../../assets/Logo-Rohde_Schwarz.jpg",
    },
    {
      id: 1,
      title: 'Back-End Developer (Working Student)',
      content: "<div>eCommeleon</div><br/><p /><p/><div>~ Integrated Walmart marketplace, facilitating large transaction inserts to MySQL databases.</div><div>~ Built Windows Desktop Applications to facilitate this.</div><div>~ Responsible for writing technical documentation.</div>",
      date: '2019 - 2020',
      icon: "../../assets/eCommeleonCentered.png",
    },
    {
      id: 2,
      title: 'Student Researcher',
      content: "<div>Digital City Department, City of Leipzig</div><p/><div>~ Automation programming and the digitalisation of bureaucratic processes.</div><div>~ Project management and organisation of citizen-participation initiatives.</div><div>~ 'Smart City'-based research.</div>",
      date: '2018 - 2019',
      icon: "../../assets/leipzigCentered.png"
    },
    {
      id: 3,
      title: 'Coworking Community Manager',
      content: "<div>Basislager Coworking, Leipzig</div><p/>        <p/><div>~ Event management</div><div>~ Community management. (Offline and Online.)</div><div>~ Organisation of event formats.</div><div>~ Facilitation of creative culture principles and values.</div>",
      date: '2016 - 2017',
      icon: "../../assets/basislagerCentered.png"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public beingRendered(): void {
    this.isBeingRendered = !this.isBeingRendered;
  }
}
