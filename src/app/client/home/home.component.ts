import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  like: any;

  tabLikes = [
    'Football', 'Competition','Programming','Boxing','Music'
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadBg();
    this.getHobbies();
    this.slideFrom();
  }


  getHobbies() {
    setInterval(() => {
      let i = this.getRandomInt(5);
      this.like = this.tabLikes[i];
    }, 2000);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  slideFrom() {
    $("img.ft").click(function () {
      $(this).show("slide", { direction: "left" }, 1000);
   });
  }

  loadBg() {
    $('.ab').flurry({
      character: "~",
      color: ["#FAFAFA", '#50758D', '#FFF'],
      speed: 2000,
      height: 600,
      frequency: 60,
      small: 6,
      large: 20,
      rotation: 90,
      rotationVariance: 20,
      startRotation: 90,
      wind: 10,
      windVariance: 100,
      opacityEasing: "cubic-bezier(1,0,.96,.9)"
    });
  }

}
