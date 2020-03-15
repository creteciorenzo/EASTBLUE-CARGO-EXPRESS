import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navHeight: any;
  constructor() {


  }

  ngOnInit() {
    this.onScroll();
    this.hamburger();
    this.buttonItem();
    // this.fadeIn();
  }

  onScroll() {
    $(window).scroll(() => {
      if ($(window).scrollTop() >= 50) {
        this.navHeight = true;
      } else {
        this.navHeight = false;
      }
    });
  }

  hamburger() {
    $('.hamburger').click(() => {
      if ($('.nav ul').hasClass('open')) {
        $('.nav ul').removeClass('open')
      } else {
        $('.nav ul').addClass('open')
      }

    })
  }

  buttonItem() {
    $('.nav li').click(() => {
      if ($('.nav ul').hasClass('open')) {
        $('.nav ul').removeClass('open')
      } else {
        $('.nav ul').addClass('open')
      }
    })
  }

  fadeIn() {
    $('.hamburger').click(() => {
      if ($('nav ul li').hasClass('fade')) {
        $('.nav ul li').removeClass('fade')
      } else {
        $('.nav ul li').addClass('fade')
      }
    })
  }

  goTop() {
    window.scrollTo(0, 0);
  }

}
