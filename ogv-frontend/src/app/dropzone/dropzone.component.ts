import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImageGalleryService } from 'src/services/image-gallery.service';
import { Gallery } from '../_interfaces/gallery';
import { Galleryimages } from '../_interfaces/imageGallery';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;
  files: any[] = [];

  @Input() gallery$ : Gallery;
  // @Input() safeGallery$ : Boolean;

  constructor(private imageGalleryService: ImageGalleryService) { }

  ngOnInit(): void {
    // this.group = this.chunk(this.files, 3);
    // console.log(this.safeGallery$);
  }

  //old
  // onFileDropped($event){
  //   for(const item of $event){
  //     this.files.push(item);
  //   }
  // }

  prototypeImage : Galleryimages = {
    galleryId : 2, // get galleryID bekommen
    id : 1,
    image : undefined,
  }



  safeGalleryImages(){
    console.log("in safeGalleryImages");
    // if(this.safeGallery$){
      // console.log(this.safeGallery$);
      for (const item of this.files) {
        console.log(item);
        this.createImageGalleryAdd(item);
      }
    // }
  }

  private createImageGalleryAdd(file:any){
    this.prototypeImage.image = file;
    this.imageGalleryService.createImageForGallery(this.prototypeImage);
    console.log(this.prototypeImage);
  }

  /**
   * on file drop handler
   */
   onFileDropped($event) {
    this.prepareFilesList($event);
    this.safeGalleryImages();
  }


   /**
   * handle file from browsing
   */
    fileBrowseHandler(files) {
      this.prepareFilesList(files);
      this.safeGalleryImages();
    }
  /**
     * Delete file from files list
     * @param index (File index)
     */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileDropEl.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB"];//"GB", "TB", "PB", "EB", "ZB", "YB"
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }


  // group: any = [[]];
  // chunk(arr: any, chunkSize: any) {
  //   let R = [];
  //   for (let i = 0, len = arr.length; i < len; i += chunkSize) {
  //     R.push(arr.slice(i, i + chunkSize));
  //   }
  //   return R;
  // }

  
  refresh(): void {
    window.location.reload();
  }
}

