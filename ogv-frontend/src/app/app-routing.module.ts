import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung/datenschutzerklaerung.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryImageSlideshowComponent } from './gallery-image-slideshow/gallery-image-slideshow.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GeraeteAusleiheComponent } from './geraete-ausleihe/geraete-ausleihe.component';
import { HistoryComponent } from './history/history.component';
import { ImageLightboxComponent } from './image-lightbox/image-lightbox.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { InternerBereichComponent } from './interner-bereich/interner-bereich.component';
import { KindergruppeComponent } from './kindergruppe/kindergruppe.component';
import { MitgliederComponent } from './mitglieder/mitglieder.component';
import { ProjectComponent } from './project/project.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { TippsAndtricksComponent } from './tipps-andtricks/tipps-andtricks.component';
import { ZeitungsArtikelComponent } from './zeitungs-artikel/zeitungs-artikel.component';

const routes: Routes = [
 {path: '', redirectTo:'startseite', pathMatch:'full'},
 {path:'startseite', component: StartseiteComponent},
 {path: 'impressum', component: ImpressumComponent},
 {path: 'datenschutz', component: DatenschutzerklaerungComponent},
 {path: 'internerBereich', component: InternerBereichComponent}, //path variable muss verschlüsselt werden
 {path: 'galerie', component: GalleryComponent},
 {path: 'kindergruppe', component: KindergruppeComponent},
 {path: 'geraeteausleihe', component: GeraeteAusleiheComponent},
 {path: 'history', component: HistoryComponent},
 {path: 'historischeFundsachen', component: ZeitungsArtikelComponent},
 {path: 'mitglieder', component: MitgliederComponent},
 {path: 'projekte', component: ProjectComponent},
 {path: 'tipps', component: TippsAndtricksComponent},
 {path: 'slideshow/:id', component: GalleryImageSlideshowComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AppComponent, StartseiteComponent, KindergruppeComponent,
  GalleryComponent, GeraeteAusleiheComponent, 
  StartseiteComponent, HistoryComponent, ZeitungsArtikelComponent, MitgliederComponent, ProjectComponent, TippsAndtricksComponent, ImageLightboxComponent]
