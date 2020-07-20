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
    this.burgerToggle();
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

  burgerToggle() {

    $('.hamburger').click(() => {
      $('.btn-center').toggleClass('active')
      $('.backdrop').toggleClass('backdrop-show')

    })

    $('.btn-center a').click(() => {
      $('.btn-center').toggleClass('active')
      $('.backdrop').toggleClass('backdrop-show')
    })

    $('.backdrop').click(() => {
      $('.btn-center').toggleClass('active')
      $('.backdrop').toggleClass('backdrop-show')
    })

    $('.close-btn').click(() => {
      $('.btn-center').toggleClass('active')
      $('.backdrop').toggleClass('backdrop-show')
    })
  }

}
