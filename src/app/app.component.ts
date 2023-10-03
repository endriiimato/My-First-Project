import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  titleCUstom = 'New Title';
  test1 = 3
  test4 = 3
  
  constructor(){

  }

  ngOnInit(): void {
    
  }
}

