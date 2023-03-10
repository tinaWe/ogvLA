import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from "@angular/core";
import { EventsParams, SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Swiper } from "swiper";
import { ImageProjekt } from "../_interfaces/imageProjekt";
import { EventpingProjekt } from "../_interfaces/eventpingcard";
import { ImagesprojectService } from "src/services/imagesproject.service";

// install Swiper modules
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: "app-picture-ogvprojekt",
  template: `
  <swiper #swiperRef
      [slidesPerView]="1"
      [centeredSlides]="true"
      [spaceBetween]="10"
      [pagination]="{type: 'fraction'}"
      [navigation]="true"

      class="mySwiper">
      <!-- Wenn ich virtual rausnehme aber encapslation rein, es funktioniert-->
      <ng-container *ngFor="let image of images$; let i = index;" >
        <ng-template swiperSlide><img [src]="'data:image/jpg;base64,'+BufferToBase64(image.image.data)" alt=""/></ng-template>
      </ng-container>
    </swiper>

    <!-- <p class="append-buttons"> -->
      <!-- <button (click)="prepend2()" class="prepend-2-slides">
        Prepend 2 Slides
      </button> -->
      <!-- <button (click)="prepend()" class="prepend-slide">Prepend Slide</button>
      <button (click)="append()" class="append-slide">Append Slide</button> -->
      <!-- <button (click)="append2()" class="append-2-slides">
        Append 2 Slides
      </button> -->
    <!-- </p> -->
  `,
  styleUrls: ["./picture-ogvprojekt.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PictureOGVProjektComponent implements OnInit { //implements OnInit 
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;
  // @Input() images$: ImageProjekt[]; 
  @Input() id$: number =1; // Übergabe der ID fnktioniert noch nicht
  // @Input() imagesOb$: ImageProjekt; 
  public images$: Array<ImageProjekt>; 

  constructor(private imagesprojectService : ImagesprojectService){
  }

  ngOnInit(): void {
    this.imagesprojectService.getImagesOfProject(this.id$).subscribe(inimage => {
      this.images$ = inimage as Array<ImageProjekt>
      });
  }
 swiper = new Swiper('.swiper', {
    // ...
    on: {
      init: function () {
        console.log('swiper initialized');
        console.log(this.id$);
      },
    },
  });
  

  // onSwiper(params: EventsParams['swiper']) {
  //   const [swiper] = params;
  //   console.log(swiper);
  // }
  // beforeTransitionStart(params: EventsParams['beforeSlideChangeStart']) {
  //   const [swiper] = params;
  //   console.log('beforeTransitionStart, speed: ' + swiper);
  // }
  
  // ngOnInit(): void {
  //   // this.imagesprojectService.getImagesOfProject(this.id$).subscribe(inimage => {
  //   //   this.images$ = inimage as ImageProjekt[]
  //   //   });
  //     console.log(this.id$);
  //     this.imagesprojectService.getImagesOfProject(this.id$).subscribe(inimage => {
  //       this.images$ = inimage as ImageProjekt[]
  //       });
  //     console.log("template da");
  //     // console.log(this.images$);
  //     // this.imagesprojectService.getImagesOfProject(3).subscribe(inimage => {
  //     //   this.images$ = inimage as ImageProjekt[]
  //     //   });
  //     //   console.log("third");
  //     //   console.log(this.images$);
  // }


  // @ViewChild("swiperRef", { static: false }) sliderRef?: SwiperComponent;




  appendNumber = 2;
  prependNumber = 1;

  // slides = Array.from({ length: 1000 }).map(
  //   (el, index) => `Slide ${index + 1}`
  // );

  // fillImages(){
  //   countOfSlides : Number;
  //   if(this.images$.length == 1){
  //     console.log("Works just fine");
  //   }else if(this.images$.length > 1){

  //     for(let i = 0; i < this.images$.length-1; i++){
  //       console.log(this.images$[i]);
  //     //  this.append(this.images$[i]); 
  //     }

  //   }else{
  //     console.log("No Image given");
  //   }
  // }
  // prepend() {
  //   this.sliderRef.swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --this.prependNumber + "</div>"
  //   );
  // }

  // prepend2() {
  //   this.sliderRef.swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --this.prependNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + --this.prependNumber + "</div>",
  //   ]);
  // }

  //  append() { //image: ImageProjekt
  //   this.sliderRef.swiperRef.mo(
  //     // '<div class="swiper-slide">Slide ' + ++this.appendNumber + "</div>"
  //     '<div class="swiper-slide"><img [src]="../../assets/img/tipps.JPG" alt="" class="d-block w-100"/></div>'
  //   );
  //   // ++this.appendNumber;
  // }

  // append2() {
  //   this.sliderRef.swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++this.appendNumber + "</div>",
  //     '<div class="swiper-slide">Slide ' + ++this.appendNumber + "</div>",
  //   ]);
  // }

    //ping empfangen
    // public createSlide(event: EventpingProjekt): void{
    //   console.log('Create for slide emfpangen');
    //   if('slideShow' === event.label){
    //     this.images$ = event.object;
    //   }
    // }

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
