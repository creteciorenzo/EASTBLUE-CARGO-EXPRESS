import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  navHeight: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  goTop() {
    //   $(window).scroll(function (event) {
    //     var scroll = $(window).scrollTop();
    //     // Do something
    // });

    $(window).scrollTop(0, 0);
  }


}
