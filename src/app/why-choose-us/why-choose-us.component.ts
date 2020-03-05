import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit {
  images = [
    "../../assets/action-asphalt-auto-automobile-193667.jpg",
    "../../assets/assorted-color-cargo-containers-near-body-of-water-2091159.jpg",
    "../../assets/delivery.jpg"
  ]

  carouselConfig = {
    'prevArrow': '.prev',
    'nextArrow': '.next',
    'infinite': true,
    'autoplay': true
  }

  constructor() { }

  ngOnInit() {
  }

}
