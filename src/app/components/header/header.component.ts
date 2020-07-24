import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public global: Globals,private titleService:Title) {
   }
  ngOnInit() { 
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( this.global.title.replace("{title}",newTitle) );
  }
}
