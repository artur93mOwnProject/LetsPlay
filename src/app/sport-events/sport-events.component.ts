import { Component, OnInit } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Component({
  selector: 'app-sport-events',
  templateUrl: './sport-events.component.html',
  styleUrls: ['./sport-events.component.css'],
})
export class SportEventsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    Scrollbar.init(document.querySelector('#scrollbar'));
  }
}
