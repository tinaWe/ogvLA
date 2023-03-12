import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException, StreamableFile, UseInterceptors, UploadedFiles } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";
import { ImagesGalleryEntity} from "./imagesgallery";
import { ImagesGalleryService} from "./imagesgallery.service";

@Controller('galleryimages')
export class ImagesGalleryController{
    constructor(private imagegalleryService: ImagesGalleryService){
    }

    @Get()
    async getImages(){
        const response = await (await this.imagegalleryService.getImages());
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    } getImagesOfYear

    @Get('/by/:galleryId')
    async getProjectsOfYear(@Param('galleryId') projektId: number){
        const response = await this.imagegalleryService.getImagesOfYear(projektId);
        if(!response) throw new NotFoundException('Project has no images ');
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }

    // @Get(':id')
    // async getProjectsOfYear(@Param('id') id: number){
    //     const response = await this.imagegalleryService.getImage(id);
    //     if(!response) throw new NotFoundException('Gallery has no images ');
    //     return response;
    //     //         return res.status(HttpStatus.OK).json({
    //     //             response
    //     //         });
    // }
  
    @Get('download')
    download(@Res() res){
        const fileName = "mutter_gottes_2.jpg";
        return res.download("..\\..\\bilderOgv\\Projekt\\" + fileName);
    }
    @Get(':id')
    async getImage(@Param('id') id: number){
        const response = await this.imagegalleryService.getImage(id);
        if(!response) throw new NotFoundException('Gallery does not exist');
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }

    @Get()
    getFile(): StreamableFile {
      const file = createReadStream(join(process.cwd(), 'package.json'));
      return new StreamableFile(file);
    }
  

    @Post() //'/create'
    async create(@Body() createGalleryDto: ImagesGalleryEntity){
        const response = await this.imagegalleryService.createImages(createGalleryDto);
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Project successfully created',
        //             response
        //         });
    }

    @Post() //'/create'
    @UseInterceptors(FileInterceptor('file'))
    async upload(@UploadedFiles() file){
       const path = "..\\..\\bilderOgv\\Projekt\\"  + file.originalname;
       let fileStream = createWriteStream(path);
       fileStream.write(file.buffer);
       fileStream.end();
    }


    @Put(':id')
    async update(@Param() id: number, @Body() createImageGalleryDto: ImagesGalleryEntity){
        const response = await this.imagegalleryService.update(id, createImageGalleryDto);
        if(!response) throw new NotFoundException('Image does not exist');
        // return res.status(HttpStatus.OK)({
        //     message: "Updated successfully",
        //     response
        // });
        return response;
    }

    @Delete() //'/delete'
    async delete(@Body() id: number){
        const response = await this.imagegalleryService.deleteImage(id);
        if(!response) throw new NotFoundException('Gallery does not exist');
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Card deleted Successfully',
        //             cardDeleted
        //         });
        return response;
    }

}