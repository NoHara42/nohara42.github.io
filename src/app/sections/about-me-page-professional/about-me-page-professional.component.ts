import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-page-professional',
  templateUrl: './about-me-page-professional.component.html',
  styleUrls: ['./about-me-page-professional.component.scss']
})
export class AboutMePageProfessionalComponent implements OnInit {
  public isBeingRendered: boolean = false;

  public chartOptions = {
    responsive: true,
    scales: {
      r: {
          angleLines: {
              display: false
          },
          beginAtZero: true,
          min: 0,
          suggestedMin: 0,
          suggestedMax: 100
      }
    }
  };

  public chartLabels = ['Typescript', 'ES6', 'Angular', 'React', 'Vue', 'MongoDB', 'Python'];

  public chartData = [
    { min:0, max:100, data: [88, 77, 80, 45, 30, 50, 70], label: 'Proficiency', fill: true, },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public beingRendered(): void {
    this.isBeingRendered = !this.isBeingRendered;
  }
}
