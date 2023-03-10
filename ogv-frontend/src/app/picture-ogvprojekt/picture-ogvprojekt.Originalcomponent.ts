// import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
// import { SwiperComponent } from "swiper/angular";
// import { Observable } from 'rxjs';
// import { ImageService } from 'src/services/image.service';
// import { ImagesprojectService } from 'src/services/imagesproject.service';
// import { ImageProjekt } from '../_interfaces/imageProjekt';

// @Component({
//   selector: 'app-picture-ogvprojekt',
//   // templateUrl: './picture-ogvprojekt.component.html',
//   // styleUrls: ['./picture-ogvprojekt.component.scss']
//   template: `<swiper class="mySwiper">
//   <ng-template swiperSlide>Slide 1</ng-template
//   ><ng-template swiperSlide>Slide 2</ng-template
//   ><ng-template swiperSlide>Slide 3</ng-template
//   ><ng-template swiperSlide>Slide 4</ng-template
//   ><ng-template swiperSlide>Slide 5</ng-template
//   ><ng-template swiperSlide>Slide 6</ng-template
//   ><ng-template swiperSlide>Slide 7</ng-template
//   ><ng-template swiperSlide>Slide 8</ng-template
//   ><ng-template swiperSlide>Slide 9</ng-template>
// </swiper>`,
// styleUrls: ["./picture-ogvprojekt.component.scss"],
// encapsulation: ViewEncapsulation.None,
// })
// export class PictureOGVProjektComponentOriginal { //implements OnInit


// //   // images = [];
// //   @Input() id$ : number;
// //   slideIndex = 0;

// //   public images$: Observable<ImageProjekt[]>; //| undefined 
// //   public images: ImageProjekt[]; //| undefined 

// //   constructor(private imagesprojectService : ImagesprojectService) { }

// //   ngOnInit(): void {
// //     console.log(this.id$);
// //     this.images$ = this.imagesprojectService.getImagesOfProject(this.id$);
// //     this.imagesprojectService.getImagesOfProject(this.id$).subscribe(inimage => {
// //       this.images = inimage as ImageProjekt[]
// //   });
// //     // this.images$ = this.imagesprojectService.getImages();
// //     // this.loadImages();
// //   }
  
// //   public activeSlideIndex: number = 0;

// //   // activeSlideChange(){
// //   //     console.log(this.activeSlideIndex);
// //   // }

// //   // public slides:Array<Object> = [
// //   //     {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(18).jpg"},
// //   //     {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"},
// //   //     {"image":"https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg"},
// //   // ];

// //   // loadImages(): void {
// //   //   this._imageService.fetchImages()
// //   //   .subscribe(images => this.images = images);
// //   // }

// //   firstImage() {
// //     this.activeSlideChange(this.slideIndex = 1);
// //   }
// //    plusSlide(n) {
// //     this.activeSlideChange(this.slideIndex += n);
// //   }

// //    currentSlide(n) {
// //     this.activeSlideChange(this.slideIndex = n);
// //   }

// //   activeSlideChange(slideIndex);
// //     activeSlideChange(n) {
// //     let i;
// //     var slides = document.getElementsByClassName("mdb-slide") as HTMLCollectionOf<HTMLElement>;
// //     var dots = document.getElementsByClassName("image")as HTMLCollectionOf<HTMLElement>;
// //     if (n > slides.length) {this.slideIndex = 1}
// //     console.log(this.slideIndex);
// //     if (n < 1) {this.slideIndex = slides.length}
// //     for (i = 0; i < slides.length; i++) {
// //         slides[i].style.display = "none";
// //     }
// //     for (i = 0; i < dots.length; i++) {
// //         dots[i].className = dots[i].className.replace(" active", "");
// //     }
// //     slides[this.slideIndex-1].style.display  = "block";
// //     if (dots && dots.length > 0) {
// //       dots[this.slideIndex-1].className += " active";
// //     }
// //   }

// //   BufferToBase64(buffer) {
// //     var binary = '';
// //     var byte = new Uint8Array( buffer );
// //     var byteLen = byte.byteLength;
// //     for (var i = 0; i < byteLen; i++) {
// //         binary += String.fromCharCode( byte[ i ] );
// //     }
// //     return window.btoa( binary );
// // }
// }
