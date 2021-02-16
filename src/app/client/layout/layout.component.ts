import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  currentSection = 'section1';
  state = false;
  default = true;
  constructor() { }

  ngOnInit(): void {
//     this.scrollTo('section3');
  }



  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: string) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

  bubble() {
    this.state = !this.state;
  }

  swsize() {
    this.default = !this.default;
  }
}
