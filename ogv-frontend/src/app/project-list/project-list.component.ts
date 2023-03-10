import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectsService } from 'src/services/projects.service';
import { EventpingProjekt } from '../_interfaces/eventpingcard';
import { Projekt } from '../_interfaces/projekt';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projekte : Projekt[];
  public $projekt : Projekt[];
  public projekt$ : Observable<Projekt[]>;
  public searchItem : string;
  public idEditProjekt: number | null = null;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor(private projektService: ProjectsService) { 
    // this.projekte = [
    //   {
    //     id : 0,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 1,
    //     title : 'Name des Projektes bzw. Veranstaltung 2',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 2,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 3,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum:'Fri Dec 08 2019',
    //     year: 2019,
    //   }
    //   ,  {
    //     id : 4,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   }
    //   ,
    //   {
    //     id : 5,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 6,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 7,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 8,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 9,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 10,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum: 'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 11,
    //     title : 'Name des Projektes bzw. Veranstaltung',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum:  'Fri Dec 08 2019',
    //     year: 2019,
    //   },
    //   {
    //     id : 12,
    //     title : 'Letztes Beispiel',
    //     beschreibung : 'Hier kommt die Beschreibung hin',
    //     datum:'Fri Dec 08 2019',
    //     year: 2019,
    //   }
    // ];

    // this.$projekt = {
    //   idProjekt : undefined,//change
    //   title : undefined,
    //   beschreibung : undefined,
    //   datum: new Date(),
    //   bilder : undefined,
    // }
  }

  ngOnInit() {
    // this.slides = this.chunk(this.cards, 4);
    // this.list = this.chunk(this.projekte, 3);
    // this.projekte;
    this.projekt$ = this.projektService.getProjekts();
    this.projektService.getProjekts()
    .subscribe(projekts => {
        this.$projekt = projekts as Projekt[]
    });
  }


  //Logik zerteile die List in dreier Abschnitten
  //Zeige den aktuellen Inhalt an, wechsel indem du auf die Pagination drückst

    list: any = [[]];
    chunk(arr: any, chunkSize: any) {
      let R = [];
      for (let i = 0, len = arr.length; i < len; i += chunkSize) {
        R.push(arr.slice(i, i + chunkSize));
      }
      return R;
    }

    transform(value: any[], ...args: any): any {
      let searchItem = ''
      if(args.length)  searchItem = args[0].toLowerCase()
      return value.filter((projekte:any)=> projekte.projekt.title.toLowerCase().includes(searchItem));
      //projekte.projekt.title.toLowerCase().includes(searchItem));
    }

    deleteProjekt(input : number){
      if (confirm(`Bist du dir sicher, dass du das Projekt löschen willst?`)) {
        // this.idEditProjekt = this.$projekt.findIndex();
        console.log(input);
        // console.log(this.idEditProjekt);
        this.projektService.deleteProjekt(input).subscribe(() => {
          this.refresh();
        });
        // this.idEditProjekt = null;
      } 
    }

    refresh(): void {
      window.location.reload();
  }

    // $(document).ready(function(){
  //     $('#data').after('<div id="nav"></div>');
  //     var rowsShown = 3;
  //     var rowsTotal = $('#data tbody tr').length;
  //     var numPages = rowsTotal/rowsShown;
  //     for(i = 0;i < numPages;i++) {
  //         var pageNum = i + 1;
  //         $('#nav').append('<a href="#" rel="'+i+'">'+pageNum+'</a> ');
  //     }
  //     $('#data tbody tr').hide();
  //     $('#data tbody tr').slice(0, rowsShown).show();
  //     $('#nav a:first').addClass('active');
  //     $('#nav a').bind('click', function(){

  //         $('#nav a').removeClass('active');
  //         $(this).addClass('active');
  //         var currPage = $(this).attr('rel');
  //         var startItem = currPage * rowsShown;
  //         var endItem = startItem + rowsShown;
  //         $('#data tbody tr').css('opacity','0.0').hide().slice(startItem, endItem).
  //                 css('display','table-row').animate({opacity:1}, 300);
  //     });
  // });


  }



