import { Directive, HostListener, ElementRef } from '@angular/core';
@Directive({
  selector: '.hamburger, .button-link'
})

export class NavigationDirective {

  constructor(element: ElementRef) {

  }
  @HostListener('click') toggleNav() {
    document.querySelector('.nav ul').classList.toggle('open');
    // document.querySelectorAll('.nav li').forEach(link => {
    //   link.classList.toggle('fade');
    // })
  }

}
