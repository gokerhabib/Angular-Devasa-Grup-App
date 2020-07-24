import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class Globals {
  title: string = "Devasa Grup | {title}";
  socialLinks = { "fb": "https://www.facebook.com/devasamedia", "tw": "https://twitter.com/devasamedia", "in": "https://www.instagram.com/devasagrup" };
  showFooter$: Observable<any>;
  showHeader$: Observable<any>;
  showInHome$: Observable<any>;
  eCatalogLink:string ="http://online.fliphtml5.com/dtrip/bkwz";
  slider = [];
  header = [];
  compaineDetail = [];
  compaine = [];
  /* activeTabName = window.location.pathname.split('/')[1];
  activeTab: string = this.activeTabName == undefined || this.activeTabName == "" ? "anasayfa" :this.activeTabName; */
}
export let appLanguage:string = localStorage.getItem("app-language");