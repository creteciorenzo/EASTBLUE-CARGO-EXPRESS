import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() {


  }

  ngOnInit() {
    this.onScroll();
  }

  onScroll() {
    $(window).scroll(() => {
      if ($(window).scrollTop() >= 50) {
        $("#navbar").addClass("sticky");
        $('#navbar').removeClass('nav');
      } else {
        $("#navbar").removeClass("sticky");
        $('#navbar').addClass('nav');
      }
    });
  }

}
