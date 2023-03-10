import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageService } from 'src/services/image.service';
import { ImagesprojectService } from 'src/services/imagesproject.service';
import { ProjectsService } from 'src/services/projects.service';
import { PictureOGVProjektComponent } from '../picture-ogvprojekt/picture-ogvprojekt.component';
import { ProjectPictureGalleryComponent } from '../project-picture-gallery/project-picture-gallery.component';
import { SharedProjectGalService } from '../shared-project-gal.service';
import { EventpingProjekt } from '../_interfaces/eventpingcard';
import { ImageProjekt } from '../_interfaces/imageProjekt';
import { Projekt } from '../_interfaces/projekt';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  // @ViewChild(ProjectPictureGalleryComponent ) child: ProjectPictureGalleryComponent ;
  @ViewChild(PictureOGVProjektComponent ) child: PictureOGVProjektComponent ;

  public projekts$: Observable<Projekt[]>; //| undefined 
  public imagesOb$: Observable<ImageProjekt[]>; //| undefined 
  public imageId$: number;
  @Output() images$: ImageProjekt[];

  constructor(private route: ActivatedRoute, 
    private sharedProjectGalService:SharedProjectGalService, 
    private projectsService: ProjectsService,
    private imagesprojectService : ImagesprojectService) { }

  ngOnInit(): void {
//   let myCompOneObj = new ProjectPictureGalleryComponent(this.imageService2);
//     myCompOneObj.loadImages();
//     myCompOneObj.firstImage();'
   this.loadGallery();
  //  this.projekts$ = this.projectsService.getProjektsOfYear(2004);
    this.projekts$ = this.projectsService.getProjekts();
    this.imagesOb$ = this.imagesprojectService.getImagesOfProject(1);
    this.imagesprojectService.getImagesOfProject(1).subscribe(inimage => {
      this.images$ = inimage as ImageProjekt[]
  });
  }

  private loadGallery(){
    this.sharedProjectGalService.sendLoadEvent();
  }

  public createHelper(id : number){
    console.log(id);
    console.log("Get images");
    // this.images$ = this.imagesprojectService.getImagesOfProject(id);
    this.imagesprojectService.getImagesOfProject(id).subscribe(inimage => {
            this.images$ = inimage as ImageProjekt[]
        });
  }

  // goToPage(pageName: string):void{
  //   this.route.navigate(['${pageName}']);
  // }

   // public deleteCard(event?: any): void{
  //   const eventObject: Eventpingcard = {
  //     label: 'delete',
  //     object: this.card$
  //   }
  //   this.ping.emit(eventObject);
  // }

  imageIni(id: number){
  this.imagesprojectService.getImagesOfProject(id).subscribe(inimage => {
    this.images$ = inimage as ImageProjekt[]
    });
    }

  @Output() public ping = new EventEmitter<any>();


  public getImages({ event, id }: { event?: any; id: number; }): void{  
    this.imagesprojectService.getImagesOfProject(id).subscribe(inimage => {
      this.images$ = inimage as ImageProjekt[]
      });

    const eventObjects: EventpingProjekt = {
      label: 'slideShow',
      object: this.images$
    }
    console.log(id);
    console.log(eventObjects);
    this.ping.emit(eventObjects);
  }
}

