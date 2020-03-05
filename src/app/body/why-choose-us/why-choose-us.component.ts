import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css']
})
export class WhyChooseUsComponent implements OnInit {
  images = [
    "../../assets/red-white-and-teal-cargo-ship-on-water-972939.jpg",
    "../../assets/assorted-color-cargo-containers-near-body-of-water-2091159.jpg",
    "../../assets/jet-cloud-landing-aircraft-46148.jpg"
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
