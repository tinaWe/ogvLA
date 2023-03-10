import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss']
})
export class ImageUploaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  uploadImage(event){
    let elem = event.target;
    if(elem.files.length > 0){
      let formData = new FormData();
      formData.append('file', elem.files[0]);
    //   this.http.post('http://localhost/script.php', formData)
    //   .subscribe((data) => {
    //     console.log('Got some data from backend', data));
    //     }, (error) => {
    //   console.log('Error!', error)
    // })
    }
  }
}
