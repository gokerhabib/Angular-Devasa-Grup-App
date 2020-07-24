import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { map, filter, mergeMap } from 'rxjs/operators';
import { Globals,appLanguage } from './globals';
import { GlobalRouteConfig } from './global-route-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private defaultShowFooter = true;
  private defaultShowInHome = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public global: Globals,
    public globalRouteConfig:GlobalRouteConfig) {
    this.showHideComponet_Fnc();
    
    this.router.config=this.globalRouteConfig.routesConfigs[appLanguage];
  }


  showHideComponet_Fnc() {
    this.global.showFooter$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data),
      map(data => data.hasOwnProperty('showFooter') ? data.showFooter : this.defaultShowFooter),
    )
    this.global.showInHome$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data),
      map(data => data.hasOwnProperty('showInHome') ? data.showInHome : this.defaultShowInHome),
    )
    this.global.showHeader$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      mergeMap(route => route.data),
      map(data => data.hasOwnProperty('showHeader') ? data.showHeader : true),
    )
  }

}
