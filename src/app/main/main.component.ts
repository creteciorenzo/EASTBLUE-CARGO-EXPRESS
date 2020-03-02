import { Component, OnInit } from "@angular/core";
import * as $ from 'jquery';
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  private _opened: boolean = false;
  _mode: string = 'over';
  _closeOnClickOutside: boolean = true;

  goTop() {
    window.scrollTo(0, 0);
  }
  private _toggleOpened(): void {
    this._opened = !this._opened;
  }





  constructor() { }

  ngOnInit() {
  }
}
