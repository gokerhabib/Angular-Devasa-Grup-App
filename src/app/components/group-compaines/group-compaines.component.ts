import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-group-compaines',
  templateUrl: './group-compaines.component.html',
  styleUrls: ['./group-compaines.component.css']
})
export class GroupCompainesComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    this.partnerJqueryFunc();
  }
  partnerJqueryFunc() {
    $(document).ready(function () {
      ///////////////////////////
    // magnificPopup
      $('.work').magnificPopup({
        delegate: '.lightbox',
        type: 'image'
      });
    });
  }
}
