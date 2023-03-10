import { Component, Input, OnInit } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ViewEncapsulation } from '@angular/core';
import { ImageGalleryService } from 'src/services/image-gallery.service';
import { Galleryimages } from '../_interfaces/imageGallery';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-lightbox',
  templateUrl: './image-lightbox.component.html',
  styleUrls: ['./image-lightbox.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageLightboxComponent implements OnInit {

    @Input() id$ : number;
    images = [];
    slideIndex = 0;
    public im: any | null = null;
    public $convertedImage : any | null = null;

    public $imageGallery : Galleryimages[];
    public imageGallery$: Observable<Galleryimages>;
  
    constructor(private imageService: ImageService, private imageGalleryService : ImageGalleryService,
      private domSanitizer : DomSanitizer, private route: ActivatedRoute) { 
        this.loadImages();
      }

      ng
  
    ngOnInit(): void {
      // this.loadImages();
      // this.methodNes();
      this.firstImage();
      }

      //----improvement performance
      // methodNes(){
      //   this.im = this.$imageGallery[0];
      //   console.log(this.im);
      //   this.im = this.$imageGallery[0].image;
      //   this.$convertedImage = this.domSanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,'+this.BufferToBase64(this.im));
      //   console.log(this.$convertedImage);
      // }
      //---
      
      loadImages(): void {
        // this.imageService.fetchImages()
        // .subscribe(images => this.images = images);

        this.imageGalleryService.getImagesGallery()
        .subscribe(imageGallery => {
        this.$imageGallery = imageGallery as Galleryimages[]
    });
      console.log(this.$imageGallery);

      this.imageGalleryService.getImageGallery(3)
      .subscribe(imageGallery => {
      this.im = imageGallery as Galleryimages});
      console.log(this.im);


      }



      firstImage() {
        this.showSlides(this.slideIndex = 1);
      }
      
      openModal() {
        document.getElementById('imgModal').style.display = "block";
    
      }
    
      closeModal() {
        document.getElementById('imgModal').style.display = "none";
      }
    
    
       plusSlides(n) {
        this.showSlides(this.slideIndex += n);
      }
    
       currentSlide(n) {
        this.showSlides(this.slideIndex = n);
      }
  
      showSlides(slideIndex);
       showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf<HTMLElement>;
        const dots = document.getElementsByClassName("images")as HTMLCollectionOf<HTMLElement>;
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display = "block";
        if (dots && dots.length > 0) {
          dots[this.slideIndex-1].className += " active";
        }
      }

      BufferToBase64(buffer) {
        var binary = '';
        var byte = new Uint8Array( buffer );
        var byteLen = byte.byteLength;
        for (var i = 0; i < byteLen; i++) {
            binary += String.fromCharCode( byte[ i ] );
        }
        return window.btoa( binary );
        }
    }
