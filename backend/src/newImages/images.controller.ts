import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException, StreamableFile, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import path = require("path");
// import { join } from 'path';
import { Observable, of } from "rxjs";
import { ImagesService} from "./images.service";
import {v4 as uuidv4} from 'uuid';
import {diskStorage} from "multer";
// import {path} from 'path';

export const storage = {
    storage: diskStorage({
        destination: './uploads/gallerimages',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
            const extension: string = path.parse(file.originalname).ext;

            cb(null, `${filename}${extension}`)
        }
    })
}
@Controller('images')
export class ImagesController{
    constructor(private imagegalleryService: ImagesService){
    }


    //old way
    // @Post() //'/create'
    // @UseInterceptors(FileInterceptor('file'))
    // async upload(@UploadedFiles() file){
    //    const path = "..\\..\\bilderOgv\\Projekt\\"  + file.originalname;
    //    let fileStream = createWriteStream(path);
    //    fileStream.write(file.buffer);
    //    fileStream.end();
    // }


    @Post('upload')
    @UseInterceptors(FileInterceptor('file', storage))
    uploadFile(@UploadedFile() file): Observable<Object>{
        console.log(file);
        return of({imagePath: file})       
    }
 
}