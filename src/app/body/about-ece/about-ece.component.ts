import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-ece',
  templateUrl: './about-ece.component.html',
  styleUrls: ['./about-ece.component.css']
})
export class AboutEceComponent implements OnInit {
  itemNumber: number
  title: string
  body: string
  modalItems = {
    item0: { title: 'Mission', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia tempore saepe. Pariatur beatae eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem. ' },
    item1: { title: 'Vision', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia tempore saepe. Pariatur beatae eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem. ' },
    item2: { title: 'Core Values', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia tempore saepe. Pariatur beatae eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem. ' },
    item3: { title: 'Objectives', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus officia tempore saepe. Pariatur beatae eaque dolore maiores earum quae, obcaecati cum at tempora vero, aliquid sequi adipisci impedit iure quidem. ' }
  }
  getNumber(no) {
    if (no === 0) {
      this.title = this.modalItems.item0.title;
      this.body = this.modalItems.item0.text;
    } else if (no === 1) {
      this.title = this.modalItems.item1.title;
      this.body = this.modalItems.item1.text;
    } else if (no === 2) {
      this.title = this.modalItems.item2.title;
      this.body = this.modalItems.item2.text;
    } else if (no === 3) {
      this.title = this.modalItems.item3.title;
      this.body = this.modalItems.item3.text;
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
