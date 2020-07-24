import { Component, OnInit } from '@angular/core';
import { SlidesOutputData, OwlOptions } from 'ngx-owl-carousel-o';
import { Globals } from '../../globals';
declare var $: any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit {
  constructor(public globals:Globals) { }
  ngOnInit() { }
  setMyStyles(style: any) {
    let obj = {};
    style = style.split(";")
    style.forEach(a => {
      let styleElement = a.split(":");
      obj[styleElement[0]] = styleElement[1];
    });
    return obj;
  }
  getData(data: SlidesOutputData) {
    if (data.slides[0]) {
      this.homeSlideChange(parseInt(data.slides[0].id));
    }
  }
  getSlide(slideId: Number) {
    return this.globals.slider.filter(a => a.id === slideId)[0];
  }
  homeSlideChange(id: Number) {
    let Slide = this.getSlide(id);
    let SlideItem = $(".owl-item").not('.cloned').find("#slide-" + id);
    SlideItem.find('h4,p').addClass("hidden").delay(1100).queue(function (next) {
      $(this).removeClass("hidden").dequeue();
    });
    SlideItem.find('h4').removeClass("animated " + Slide.titleAnimate);
    SlideItem.find('p').removeClass("animated " + Slide.textAnimate);
    setTimeout(function () {
      SlideItem.find('h4').addClass("animated " + Slide.titleAnimate);
      setTimeout(function () {
        SlideItem.find('p').addClass("animated " + Slide.textAnimate);

      }, 1000);
    }, 0);
  }
  carouselOptions: OwlOptions = {
    margin: 0,
    items: 1,
    nav: false,
    dots: false,
    stagePadding: 0,//Sağdan soldan göstertme
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    autoplay: false,
    autoplayTimeout: 9000,
    autoplayHoverPause: false,
    animateIn: 'rotateInDownLeft',
    animateOut: 'rotateOutDownLeft',
    mouseDrag: true,

  }
 
}
