import { Injectable } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { CorporateComponent } from './components/corporate/corporate.component';
import { GroupCompainesComponent } from './components/group-compaines/group-compaines.component';
import { ContactComponent } from './components/contact/contact.component';
import { CompainesDetailComponent } from './components/compaines-detail/compaines-detail.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';
@Injectable()

export class GlobalRouteConfig {
  routesConfigs= {
    "tr": [{ path: '', component: HomeComponent, data: { showFooter: false, showInHome: true } },
      { path: 'Kurumsal', component: CorporateComponent },
      { path: 'Sirketlerimiz', component: GroupCompainesComponent },
      { path: 'iletisim', component: ContactComponent },
      { path: 'Sirket-Detay/:id', component: CompainesDetailComponent },
      { path: 'Katalog', component: CatalogsComponent },
      { path: '404', component: NotFoundComponent, data: { showHeader: false, showFooter: false } },
      { path: '**', redirectTo: '/404' }
    ],
    "en": [{ path: '', component: HomeComponent, data: { showFooter: false, showInHome: true } },
      { path: 'en/Corporate', component: CorporateComponent },
      { path: 'en/Companies', component: GroupCompainesComponent },
      { path: 'en/Contact', component: ContactComponent },
      { path: 'en/Compaine-Detail/:id', component: CompainesDetailComponent },
      { path: 'en/Catalog', component: CatalogsComponent },
      { path: '404', component: NotFoundComponent, data: { showHeader: false, showFooter: false } },
      { path: '**', redirectTo: '/404' }
    ],    
    "ar": [{ path: '', component: HomeComponent, data: { showFooter: false, showInHome: true } },
      { path: 'ar/المؤسسية', component: CorporateComponent },
      { path: 'ar/شركتنا', component: GroupCompainesComponent },
      { path: 'ar/التماس', component: ContactComponent },
      { path: 'ar/Sirket-Detay/:id', component: CompainesDetailComponent },
      { path: 'ar/فهرس', component: CatalogsComponent },
      { path: '404', component: NotFoundComponent, data: { showHeader: false, showFooter: false } },
      { path: '**', redirectTo: '/404' }
    ],    
    "ms": [{ path: '', component: HomeComponent, data: { showFooter: false, showInHome: true } },
      { path: 'ms/Korporat', component: CorporateComponent },
      { path: 'ms/Syarikat-Kami', component: GroupCompainesComponent },
      { path: 'ms/Komunikasi', component: ContactComponent },
      { path: 'ms/Butiran-Syarikat/:id', component: CompainesDetailComponent },
      { path: 'ms/Katalog', component: CatalogsComponent },
      { path: '404', component: NotFoundComponent, data: { showHeader: false, showFooter: false } },
      { path: '**', redirectTo: '/404' }
    ],    
  };
}