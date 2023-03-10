import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

// MDB Modules
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartseiteComponent } from './startseite/startseite.component';
import { GeraeteAusleiheComponent } from './geraete-ausleihe/geraete-ausleihe.component';
import { HistoryComponent } from './history/history.component';
import { ZeitungsArtikelComponent } from './zeitungs-artikel/zeitungs-artikel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ModalComponent } from './modal/modal.component';
import { ImageLightboxComponent } from './image-lightbox/image-lightbox.component';
import { ImageService } from 'src/services/image.service';
import { AppRoutingModule } from './app-routing.module';
import { MitgliederComponent } from './mitglieder/mitglieder.component';
import { KindergruppeComponent } from './kindergruppe/kindergruppe.component';
import { ProjectComponent } from './project/project.component';
import { ProjectPictureGalleryComponent } from './project-picture-gallery/project-picture-gallery.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PictureOGVProjektComponent } from './picture-ogvprojekt/picture-ogvprojekt.component';
import { LogInComponent } from './log-in/log-in.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DatenschutzerklaerungComponent } from './datenschutzerklaerung/datenschutzerklaerung.component';
import { InternerBereichComponent } from './interner-bereich/interner-bereich.component';
import { EmptyCardComponent } from './empty-card/empty-card.component';
import {CardListComponent} from './card-list/card-list.component';
import {ShowncardComponent} from './shown-card/shown-card.component';
import { AddCardComponent } from './add-card/add-card.component';
import { ProjecteAnlegenComponent } from './projecte-anlegen/projecte-anlegen.component';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { DropzoneComponent } from './dropzone/dropzone.component';
import { DndDirective } from './dnd.directive';
import { ProgressComponent } from './progress/progress.component';
import { GalleryanlegenComponent } from './galleryanlegen/galleryanlegen.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { UebersichtKontenComponent } from './uebersicht-konten/uebersicht-konten.component';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { AddAccountModalComponent } from './add-account-modal/add-account-modal.component';
import { EditAccountModalComponent } from './edit-account-modal/edit-account-modal.component';

// Material UI Modules
import { SwiperModule } from 'swiper/angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TippsAndtricksComponent } from './tipps-andtricks/tipps-andtricks.component';
import { TippsGridComponent } from './tipps-andtricks/tipps-grid/tipps-grid.component';
import { TippsGridItemComponent } from './tipps-andtricks/tipps-grid-item/tipps-grid-item.component';
import { Cardstyle1Component } from './tipps-andtricks/card-templates/cardstyle1/cardstyle1.component';
import { Cardstyle2Component } from './tipps-andtricks/card-templates/cardstyle2/cardstyle2.component';
import { CardTemplateBaseComponent } from './tipps-andtricks/card-templates/card-template-base';
import { TippsAnlegenComponent } from './tipps-anlegen/tipps-anlegen.component';
import { TippsInfo1Component } from './tipps-anlegen/tipps-info1/tipps-info1.component';
import { TippsInfo2Component } from './tipps-anlegen/tipps-info2/tipps-info2.component';
import { Cardstyle3Component } from './tipps-andtricks/card-templates/cardstyle3/cardstyle3.component';
import { TippsInfo3Component } from './tipps-anlegen/tipps-info3/tipps-info3.component';
import { TippsListComponent } from './tipps-list/tipps-list.component';
import { ProjektTemplateComponent } from './projekt-template/projekt-template.component';
import { ProjektGridComponent } from './projekt-template/projekt-grid/projekt-grid.component';
import { ProjektGridItemComponent } from './projekt-template/projekt-grid-item/projekt-grid-item.component';
import { Projektstyle2Component } from './projekt-template/projekt-templates/projektstyle2/projektstyle2.component';
import { Projektstyle1Component } from './projekt-template/projekt-templates/projektstyle1/projektstyle1.component';
import { ImageGalleryService } from 'src/services/image-gallery.service';
import { ProjectSketchComponent } from './project/project-sketch/project-sketch.component';
import { GalleryImageSlideshowComponent } from './gallery-image-slideshow/gallery-image-slideshow.component';
// import { ImagePipe } from './gallery/image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StartseiteComponent,
    GeraeteAusleiheComponent,
    HistoryComponent,
    ZeitungsArtikelComponent,
    GalleryComponent,
    ModalComponent,
    ImageLightboxComponent,
    MitgliederComponent,
    KindergruppeComponent,
    ProjectComponent,
    ProjectPictureGalleryComponent,
    PictureOGVProjektComponent,
    LogInComponent,
    ImpressumComponent,
    DatenschutzerklaerungComponent,
    InternerBereichComponent,
    EmptyCardComponent,
    CardListComponent,
    ShowncardComponent,
    AddCardComponent,
    ProjecteAnlegenComponent,
    ImageUploaderComponent,
    DropzoneComponent,
    DndDirective,
    ProgressComponent,
    GalleryanlegenComponent,
    ProjectListComponent,
    UebersichtKontenComponent,
    GalleryListComponent,
    AddAccountModalComponent,
    EditAccountModalComponent,
    TippsAndtricksComponent,
    TippsGridComponent,
    TippsGridItemComponent,
    CardTemplateBaseComponent,
    Cardstyle1Component,
    Cardstyle2Component,
    TippsAnlegenComponent,
    TippsInfo1Component,
    TippsInfo2Component,
    Cardstyle3Component,
    TippsInfo3Component,
    TippsListComponent,
    ProjektTemplateComponent,
    ProjektGridComponent,
    ProjektGridItemComponent,
    Projektstyle2Component,
    Projektstyle1Component,
    ProjectSketchComponent,
    GalleryImageSlideshowComponent,
    // ImagePipe
  ],  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    SwiperModule
  ],
  providers: [ImageService, ImageGalleryService],
  entryComponents: [Cardstyle1Component, Cardstyle2Component],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
