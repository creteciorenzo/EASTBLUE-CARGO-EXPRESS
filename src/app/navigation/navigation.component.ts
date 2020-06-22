import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navHeight: boolean = false;

  constructor() {


  }

  ngOnInit() {
    this.onScroll();
    this.hamburger();
    this.buttonItem();
  }

  onScroll() {
    $(window).scroll(() => {
      var height = $('#head').height();
      if ($(window).scrollTop() > height) {
        $('.menu').addClass('fixed')
      } else {
        $('.menu').removeClass('fixed')
      }
    });
  }

  hamburger() {
    $('.hamburger').click(() => {
      $('.nav-bar-extended').toggleClass('nav-active')
      this.navHeight = !this.navHeight
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


  goTop() {
    this.navHeight = $('#navbar').position().top === 0 ? false : true;
  }

}
