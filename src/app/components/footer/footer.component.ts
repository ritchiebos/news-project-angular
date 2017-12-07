import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  public year: number = 2017;
  public company: string = 'The News Blog';
  
  constructor() { }

  ngOnInit() {
  }

}
