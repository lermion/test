import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
    styles: [`
      :host {
          display: contents
      }`]
})

export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
