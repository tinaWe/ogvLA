import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/services/gallery.service';
import { Gallery } from '../_interfaces/gallery';

@Component({
  selector: 'app-galleryanlegen',
  templateUrl: './galleryanlegen.component.html',
  styleUrls: ['./galleryanlegen.component.scss']
})
export class GalleryanlegenComponent implements OnInit {

  public galleryName : string;
  public galleryYear : number;
  public safeGalleryImages : boolean;

  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    // this.safeGalleryImages = false;
  }

  galleryAdd : Gallery = {
    id : 1,
    name : '',
    year: '',
    image: undefined
  }

  addGallery(){
    this.galleryAdd.name = this.galleryName;
    this.galleryAdd.year = String(this.galleryYear);
    this.safeGalleryImages = true;
    this.galleryService.createGallery(this.galleryAdd);
    console.log(this.galleryAdd);
    console.log(this.safeGalleryImages);
  }

  refresh(): void {
    window.location.reload();
  }

}
