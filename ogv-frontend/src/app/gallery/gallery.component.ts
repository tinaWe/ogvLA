import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from '../_interfaces/gallery';
import { Observable, Observer } from 'rxjs';
import { Galleryimages } from '../_interfaces/imageGallery';
import { GalleryService } from 'src/services/gallery.service';
import { ImageGalleryService } from 'src/services/image-gallery.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  modalRef: MdbModalRef<ModalComponent> | null = null;
  public imageBlobUrl: any | null = null;
  public im: any | null = null;

  public $galleryOverview : Gallery[]; //[]
  public galleryOverview$: Observable<Gallery[]>;
  galleryOverview: Gallery[] = [];

  public $imageGallery : Galleryimages;
  public $convertedImage : any | null = null;
  public imageGallery$: Observable<Galleryimages>;

  constructor(private route: ActivatedRoute, private router: Router, private modalService: MdbModalService,
    private galleryService : GalleryService,
    private imageGalleryService : ImageGalleryService,
    private domSanitizer : DomSanitizer
  ) {}

  // openModal() {
  //   this.modalRef = this.modalService.open(ModalComponent, {
  //     data: { title: 'Custom title' },
  //   });
  // }

  ngOnInit(): void {
    this.galleryOverview$ = this.galleryService.getGallerys();
    this.galleryService.getGallerys()
    .subscribe(gallery => {
        this.$galleryOverview = gallery as Gallery[]
    });

    // this.imageGallery$ = this.imageGalleryService.getImageGallery(1);
    // this.imageGalleryService.getImageGallery(1)
    // .subscribe(imageGallery => {
    //     this.$imageGallery = imageGallery as Galleryimages
    // }).unsubscribe;

    // console.log(this.imageGallery$);
    // this.imageGalleryService.getImageGallery(1, 1).pipe()
    // .subscribe(imageGallery => {
    //     this.$imageGallery = imageGallery as ImageGallery
    // });
    // this.methodNes();
    // this.getThumbnail();
  }

  goToSlideshow(id: number){
    this.router.navigate(['/slideshow', id]);  // define your component where you want to go
}

  // methodNes(){
  //   console.log(this.$imageGallery);
  //   // this.im = this.$imageGallery.image.arrayBuffer;
  //   this.$convertedImage = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' +this.BufferToBase64(this.imageGallery$.forEach));
  //   console.log(this.$convertedImage);
  // }
 

  // NewTry(ArrayBuffer){
  //   let TYPED_ARRAY = new Uint8Array(ArrayBuffer);
  //   // const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
  //   const STRING_CHAR = TYPED_ARRAY.reduce((data, byte)=> {
  //     return data + String.fromCharCode(byte);
  //     }, '');
  //   let base64String = btoa(STRING_CHAR);
  //   this.imageurl = this..domSanitizer.bypassSecurityTrustUrl(‘data:image/jpg;base64, ‘ + base64String);
  // }

  openModal(index: number) {
    console.log(index);
    console.log(this.$galleryOverview[index].name);
    this.modalRef = this.modalService.open(ModalComponent, { modalClass: 'modal-dialog-centered', data: { title: this.$galleryOverview[index].name, id: index+1}}); //}
    this.modalRef.onClose.subscribe((message: any) => {
      console.log(message);
    });
  }

  // getImage(){
  //   return new Observable<ImageGallery>(observer => { 
  //   const reader = new FileReader();
  //           reader.readAsDataURL(this.$imageGallery.image); // convert blob to base64
  //           reader.onloadend = function() {             
  //                 observer.next(reader.); // emit the base64 string result
  //           }
  //     }
  // }

  imageSubscribe(observer: Observer<Galleryimages>){
    observer.next(this.$imageGallery[0].image);
    observer.complete();
    return {unsubscribe() {}};
  }

  BufferToBase64(buffer) {
    // var binary = '';
    var byte = new Uint8Array( buffer );
    // var byteLen = byte.byteLength;
    // for (var i = 0; i < byteLen; i++) {
    //     binary += String.fromCharCode.apply( byte[ i ] );
    // }
    const STRING_CHAR = byte.reduce((data, byte)=> {
      return data + String.fromCharCode(byte);
      }, '');
    return window.btoa( STRING_CHAR );
    }

    //funktioniert
    // BufferToBase64(buffer) {
    //   var binary = '';
    //   var byte = new Uint8Array( buffer );
    //   var byteLen = byte.byteLength;
    //   for (var i = 0; i < byteLen; i++) {
    //       binary += String.fromCharCode( byte[ i ] );
    //   }
    //   return window.btoa( binary );
    //   }


    //new try
    // getThumbnail() : void {
    //   this.imageGalleryService.getImageGallery(1,1)
    //     .subscribe(
    //       (val) => {
    //         console.log("POST - getThumbnail- successful value returned in body", val);
    //         //this.turl = val; //<====== Set value here
    //         console.log(val.image);
    //        this.$convertedImage = this.createImageFromBlob(val.image);
    //       },
    //       response => {
    //         console.log("POST - getThumbnail - in error", response);
    //       },
    //       () => {
    //         console.log("POST - getThumbnail - observable is now completed.");
    //       });
    // }
  
    // createImageFromBlob(image: Blob) { //Blob
    //   console.log("Call createImageFromBlob()", image);
    //   let reader = new FileReader();
    //   reader.addEventListener("load", () => {
    //     this.imageBlobUrl = reader.result;
    //   }, false);
  
    //   if (image) {
    //     reader.readAsArrayBuffer(image);
    //   }
    // }
  
}

// export class AppComponent {
//   modalRef: MdbModalRef<ModalComponent> | null = null;

//   constructor(private modalService: MdbModalService) {}

//   openModal() {
//     this.modalRef = this.modalService.open(ModalComponent)
//   }

// }