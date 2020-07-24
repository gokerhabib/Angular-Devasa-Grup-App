import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { CorporateComponent } from './components/corporate/corporate.component';
import { GroupCompainesComponent } from './components/group-compaines/group-compaines.component';
import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/notfound/notfound.component";
import { CompainesDetailComponent } from './components/compaines-detail/compaines-detail.component';
import { CatalogsComponent } from './components/catalogs/catalogs.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { showFooter: false, showInHome: true } },
  { path: 'Kurumsal', component: CorporateComponent },
  { path: 'Sirketlerimiz', component: GroupCompainesComponent },
  { path: 'iletisim', component: ContactComponent },
  { path: 'Sirket-Detay:id', component: CompainesDetailComponent },
  { path: 'Katalog', component: CatalogsComponent },
  { path: '404', component: NotFoundComponent,data:{showHeader:false,showFooter:false} },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

