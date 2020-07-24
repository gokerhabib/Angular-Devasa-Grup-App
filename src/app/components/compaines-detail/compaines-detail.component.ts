import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../../globals';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-compaines-detail',
  templateUrl: './compaines-detail.component.html',
  styleUrls: ['./compaines-detail.component.css']
})
export class CompainesDetailComponent implements OnInit {
  id: number;
  compaineDetail: any;
  compaineInfo:any;
  constructor(private route: ActivatedRoute,public globals :Globals) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.compaineDetail = this.globals.compaineDetail.filter(a=>a.id===this.id).shift();
      this.compaineInfo = this.globals.compaine.filter(a=>a.id===this.id).shift();
   });
  }

  carouselOptions: OwlOptions = {
    margin: 0,
    items: 1,
    nav: true,
    dots: false,
    stagePadding: 0,//Sağdan soldan göstertme
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    /* animateIn: 'rotateInDownLeft',
    animateOut: 'rotateOutDownLeft', */
    mouseDrag: true,
  }

}
