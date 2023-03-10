import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PictureOGVProjektComponent } from 'src/app/picture-ogvprojekt/picture-ogvprojekt.component';
import { SharedProjectGalService } from 'src/app/shared-project-gal.service';
import { Projekt } from 'src/app/_interfaces/projekt';
import { ProjectsService } from 'src/services/projects.service';
import { ProjektTemplateComponent } from '../../projekt-template.component';

@Component({
  selector: 'app-projektstyle1',
  templateUrl: './projektstyle1.component.html',
  styleUrls: ['./projektstyle1.component.scss']
})
export class Projektstyle1Component extends ProjektTemplateComponent  {

  @ViewChild(PictureOGVProjektComponent ) child: PictureOGVProjektComponent ;

  public projekts$: Observable<Projekt[]>; //| undefined 

  // constructor(private route: ActivatedRoute, 
  //   private sharedProjectGalService:SharedProjectGalService,
  //    private projectsService: ProjectsService) { }
  private projectsService: ProjectsService;
  private sharedProjectGalService:SharedProjectGalService;
  ngOnInit(): void {
//   let myCompOneObj = new ProjectPictureGalleryComponent(this.imageService2);
  
//     myCompOneObj.loadImages();
//     myCompOneObj.firstImage();'
   this.loadGallery();
  //  this.projekts$ = this.projectsService.getProjektsOfYear(2004);
  this.projekts$ = this.projectsService.getProjekts();
  }

  private loadGallery(){
    this.sharedProjectGalService.sendLoadEvent();
  }
}
