import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageGalleryService } from 'src/services/image-gallery.service';
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';
import { SwiperComponent } from 'swiper/angular';
import { Galleryimages } from '../_interfaces/imageGallery';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-gallery-image-slideshow',
  templateUrl: './gallery-image-slideshow.component.html',
  styleUrls: ['./gallery-image-slideshow.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GalleryImageSlideshowComponent implements OnInit {

  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  public images$: Array<Galleryimages>; 
  Images: Array<Galleryimages>;
  id: string;
  convertId: number;

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.convertId = Number(this.id);
    this.imagesgalleryService.getImagesOfYear(this.convertId).subscribe(inimage => {
      this.images$ = inimage as Array<Galleryimages>
      });
    // this.getArrayObject();
  }


  // @Input() imagesOb$: ImageProjekt; 


  constructor(private imagesgalleryService : ImageGalleryService,  private route: ActivatedRoute){
  }



  // getArrayObject(){
  //   for(let ind = 0; ind < this.images$.length; ind++){
  //     this.Images[ind] = this.images$[ind];
  //   }
  //   console.log(this.Images);
  // }

 swiper = new Swiper('.swiper', {
    // ...#
    // virtual:{
    //   slides: [this.images$.findIndex[1]]
    // },
    on: {
      init: function () {
        console.log('swiper initialized');
        console.log(this.id$);
        // this.imagesprojectService.getImagesOfProject(this.id$).subscribe(inimage => {
        //   this.images$ = inimage as ImageProjekt[]
        //   });
      },
    },
  });
  

 
  
    //funktioniert
    BufferToBase64(buffer) {
      var binary = '';
      var byte = new Uint8Array( buffer );
      // console.log(byte);
      var byteLen = byte.byteLength;
      for (var i = 0; i < byteLen; i++) {
          binary += String.fromCharCode( byte[ i ] );
      }
      return window.btoa( binary );
      }
}

