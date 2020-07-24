import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER,NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { CorporateComponent } from './components/corporate/corporate.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { Globals,appLanguage } from './globals';
import { GlobalRouteConfig } from './global-route-config';
import { TopheaderComponent } from './components/topheader/topheader.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {TranslateService} from './services/translate.service';
import { TranslatePipe } from './pipes/translate.pipe';
import { CompainesDetailComponent } from './components/compaines-detail/compaines-detail.component';
import { GroupCompainesComponent } from './components/group-compaines/group-compaines.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';

export function setupTranslateFactory(
  service: TranslateService): Function {
  return () => service.use(appLanguage);
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CorporateComponent,
    HomeComponent,
    SliderComponent,
    TopheaderComponent,
    NotFoundComponent,
    TranslatePipe,
    CompainesDetailComponent,
    GroupCompainesComponent,
    CatalogsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule
  ],
  providers: [Globals,GlobalRouteConfig,{
    provide: APP_INITIALIZER,
    useFactory: setupTranslateFactory,
    deps: [ TranslateService ],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
