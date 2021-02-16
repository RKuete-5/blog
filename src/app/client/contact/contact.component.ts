import { Component, OnInit } from '@angular/core';
import * as Vara from 'vara';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.signature();
  }

  signature() {
    var vara = new Vara("#signature","../../../assets/fonts/pacifico.json",[
      {
        text: "My name is Harry Potter",
        y: 150,
        fromCurrentPosition: { y: false },
        duration: 3000
      },
      {
        text: "hello Harry Potter, my name is Tom Riddle",
        y: 150,
        fromCurrentPosition: { y: false },
        delay: 3000,
        duration: 4000
      },
      {
        text: "Do you know anything about the Chamber of Secrets ?",
        y: 150,
        fromCurrentPosition: { y: false },
        delay: 3000,
        duration: 4500
      },
      {
        text: "Yes",
        y: 150,
        fromCurrentPosition: { y: false },
        delay: 3000,
        duration: 1000
      },
      {
        text: "Can you tell me ?",
        y: 150,
        fromCurrentPosition: { y: false },
        delay: 3000,
        duration: 4000
      },
      {
        text: "No",
        y: 150,
        fromCurrentPosition: { y: false },
        delay: 3000,
        duration: 1000
      },
      {
        text: "But I can show you",
        y: 150,
        fromCurrentPosition: { y: false },
        delay: 3000,
        duration: 4000
      },
      {
        text: "Let me take you back fifty years ago",
        y: 150,
        fromCurrentPosition: { y: false },
        delay: 3000,
        duration: 4000
      },
      {
        text: "Hi there,",
        y: 150,
        id: "no_erase",
        delay: 2000
      },
      {
        text: "Check out my Github page",
        id: "story"
      }
    ],{
      fontSize:46,
      color:"#FAFAFA",
    });
    vara.ready(function(){
      var erase = true;
      vara.animationEnd(function(i, o) {
        if (i == "no_erase") erase = false;
        if (erase) {
          o.container.style.transition = "opacity 1s 1s";
          o.container.style.opacity = '0';
        }
      });
      vara.draw("story");
    })
  }
}
