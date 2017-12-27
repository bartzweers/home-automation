import { Component, OnInit } from '@angular/core';
import * as gradient from 'random-gradient';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  ngOnInit() {
    const background = document.querySelector('.background') as any;
    background.style.backgroundImage = gradient('Settings');
  }
}
