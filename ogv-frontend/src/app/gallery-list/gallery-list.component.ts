import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { GalleryService } from 'src/services/gallery.service';
import { Gallery } from '../_interfaces/gallery';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss']
})
export class GalleryListComponent implements OnInit {

  gallery : Gallery[];
  public $gallery : Gallery[];
  public gallery$ : Observable<Gallery[]>;
  public searchItem : string;
  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  constructor(private galleryService: GalleryService) { 
    // this.gallery = [
    //   {
    //     idGallery : 0,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '     
    //   },
    //   {
    //     idGallery : 1,
    //     title : 'Name des Bilder bzw. Veranstaltung 2',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 2,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 3,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   }
    //   ,  {
    //     idGallery : 4,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   }
    //   ,
    //   {
    //     idGallery : 5,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 6,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 7,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 8,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 9,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 10,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 11,
    //     title : 'Name des Bilder bzw. Veranstaltung',
    //     year: 2019,
    //     bilder: ' '
    //   },
    //   {
    //     idGallery : 12,
    //     title : 'Letztes Beispiel',
    //     year: 2019,
    //     bilder: ' '
    //   }
    // ];

  }

  ngOnInit() {
    // this.slides = this.chunk(this.cards, 4);
    // this.list = this.chunk(this.gallery, 3);
    // this.gallery;
    this.galleryService.getGallerys().subscribe(gallerie => {
      this.$gallery = gallerie as Gallery[]
     });
  }

  deleteGallery(input : number){
    if (confirm(`Bist du dir sicher, dass du die Gallerie löschen willst?`)) {
      console.log(input);
      this.galleryService.deleteGallery(input).subscribe(() => {
        this.refresh();
      });
    } 
  }

  refresh(): void {
    window.location.reload();
}


    // list: any = [[]];
    // chunk(arr: any, chunkSize: any) {
    //   let R = [];
    //   for (let i = 0, len = arr.length; i < len; i += chunkSize) {
    //     R.push(arr.slice(i, i + chunkSize));
    //   }
    //   return R;
    // }

    transform(value: any[], ...args: any): any {
      let searchItem = ''
      if(args.length)  searchItem = args[0].toLowerCase()
      return value.filter((gallery:any)=> gallery.gallery.title.toLowerCase().includes(searchItem));
    }

}
