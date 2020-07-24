import { Component, OnInit } from '@angular/core';
import { GlobalRouteConfig } from "../../global-route-config";
import { TranslateService } from '../../services/translate.service';
import { Router } from '@angular/router';
import { Globals } from '../../globals';

@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {

  constructor(public translateService: TranslateService, private router: Router, public global: Globals, public globalRouteConfig: GlobalRouteConfig) { }

  ngOnInit() {
  }
  translate(lang: string) {
    localStorage.setItem("app-language", lang);
    this.translateService.use(lang);
    this.router.config = this.globalRouteConfig.routesConfigs[lang];
  }
}
