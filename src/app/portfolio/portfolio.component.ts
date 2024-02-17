import { Component } from '@angular/core';
import {Directive, HostListener} from "@angular/core";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent {
  showOver : boolean = false;
  overSrc : string = "";
  sources: img[] = [{ src :'assets/poert1.png'},
  { src :'assets/port2.png'},
  { src :'assets/port3.png'},
  { src :'assets/poert1.png'}, 
  { src :'assets/port2.png'},
  { src :'assets/port3.png'}]
  
  showImgOver( src : string){
    this.overSrc = src
    this.showOver = true
  }
  endShow(){
    this.showOver = false
  }
}
export class img {
  src : string = ""
}

