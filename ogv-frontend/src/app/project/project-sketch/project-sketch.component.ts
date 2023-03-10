import { Component, ViewEncapsulation, ViewChild, Input, OnInit } from "@angular/core";
import { EventsParams, SwiperComponent } from "swiper/angular";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation, Swiper } from "swiper";
// import { ImageProjekt } from "../_interfaces/imageProjekt";
// import { EventpingProjekt } from "../_interfaces/eventpingcard";
import { ImagesprojectService } from "src/services/imagesproject.service";
import { ImageProjekt } from "src/app/_interfaces/imageProjekt";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-project-sketch',
  templateUrl: './project-sketch.component.html',
  styleUrls: ['./project-sketch.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectSketchComponent implements OnInit {
  @ViewChild('swiperRef', { static: false }) swiperRef?: SwiperComponent;

  public images$: Array<ImageProjekt>; 
  Images: Array<ImageProjekt>;
  @Input() id$: number; // Übergabe der ID fnktioniert noch nicht

  ngOnInit(): void {
    console.log("sketch");
    console.log(this.id$);
    this.imagesprojectService.getImagesOfProject(this.id$).subscribe(inimage => {
      this.images$ = inimage as Array<ImageProjekt>
      });
    // this.getArrayObject();
  }


  // @Input() imagesOb$: ImageProjekt; 


  constructor(private imagesprojectService : ImagesprojectService){
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
