import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/services/image.service';
import { SharedProjectGalService } from '../shared-project-gal.service';

@Component({
  selector: 'app-project-picture-gallery',
  templateUrl: './project-picture-gallery.component.html',
  styleUrls: ['./project-picture-gallery.component.scss']
})

 export class ProjectPictureGalleryComponent implements OnInit {
  
  images = [];
  slideIndex = 0;

  constructor(private _imageService: ImageService, private sharedGalleryService:SharedProjectGalService) { 
    this.loadEventSubscription= this.sharedGalleryService.getLoadEvent().subscribe(()=>{
      this.loadImages();
      this.firstImage();})
  }
  loadEventSubscription:Subscription;

    ngOnInit(): void {
      this.loadImages();
      this.firstImage();
      }
      
      loadImages(): void {
        this._imageService.fetchImages()
        .subscribe(images => this.images = images);
      }

      firstImage() {
        this.showSlides(this.slideIndex = 1);
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
        var slides = document.getElementsByClassName("img-slides") as HTMLCollectionOf<HTMLElement>;
        var dots = document.getElementsByClassName("images")as HTMLCollectionOf<HTMLElement>;
        if (n > slides.length) {this.slideIndex = 1}
        if (n < 1) {this.slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex-1].style.display  = "block";
        if (dots && dots.length > 0) {
          dots[this.slideIndex-1].className += " active";
        }
      }

    
}
