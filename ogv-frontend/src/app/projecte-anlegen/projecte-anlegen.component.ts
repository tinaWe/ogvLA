import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/services/projects.service';
import { Projekt } from '../_interfaces/projekt';

@Component({
  selector: 'app-projecte-anlegen',
  templateUrl: './projecte-anlegen.component.html',
  styleUrls: ['./projecte-anlegen.component.scss']
})
export class ProjecteAnlegenComponent implements OnInit {

  public projectName : string;
  public projectYear : number;
  public projectBeschreibung : string;
  public projectDate : Date;
  public safeGalleryImages : boolean;
  constructor(private projectService : ProjectsService) { }

  ngOnInit(): void {
  }

  projectAdd : Projekt = {
    id : undefined,
    title : '',
    beschreibung : '',
    datum: undefined,
    year: undefined
  }

  addProject(){
    this.projectAdd.title = this.projectName;
    this.projectAdd.beschreibung = this.projectBeschreibung;
    this.projectAdd.year = this.projectYear;
    this.projectAdd.datum = String(this.projectDate);
    this.projectService.createProjekt(this.projectAdd).subscribe(() =>
    {    
       this.refresh();
     });
    console.log(this.projectAdd);
    // console.log(this.safeGalleryImages);
  }

  refresh(): void {
    window.location.reload();
}
}


