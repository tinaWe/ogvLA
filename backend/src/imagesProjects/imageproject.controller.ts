import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException, UseInterceptors, UploadedFiles, StreamableFile } from "@nestjs/common";
import { ProjectImagesEntity} from "./imagesprojects";
import { ImagesProjectService} from "./imageproject.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { createReadStream, createWriteStream } from "fs";
import { join } from "path";

@Controller('imagesprojects')
export class ImageProjectController{
    constructor(private imageprojectService: ImagesProjectService){
    }

    @Get()
    async getImages(){
        const response = await this.imageprojectService.getImages();
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }

    @Get('/by/:projektId')
    async getProjectsOfYear(@Param('projektId') projektId: number){
        const response = await this.imageprojectService.getImagesOfProject(projektId);
        if(!response) throw new NotFoundException('Project has no images ');
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }
  
    // @Get('download')
    // download(@Res() res){
    //     const fileName = "mutter_gottes_2.jpg";
    //     return res.download("..\\..\\bilderOgv\\Projekt\\" + fileName);
    // }
    @Get(':id')
    async getImage(@Param('id') id: number){
        const response = await this.imageprojectService.getImage(id);
        if(!response) throw new NotFoundException('Project does not exist');
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
    async create(@Body() createProjectDto: ProjectImagesEntity){
        const response = await this.imageprojectService.createImages(createProjectDto);
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Project successfully created',
        //             response
        //         });
    }

    // @Post() //'/create'
    // @UseInterceptors(FileInterceptor('file'))
    // async upload(@UploadedFiles() file){
    //    const path = "..\\..\\bilderOgv\\Projekt\\"  + file.originalname;
    //    let fileStream = createWriteStream(path);
    //    fileStream.write(file.buffer);
    //    fileStream.end();
    // }

    @Put(':id')
    async update(@Param() id: number, @Body() createProjectDto: ProjectImagesEntity){
        const response = await this.imageprojectService.update(id, createProjectDto);
        if(!response) throw new NotFoundException('Image does not exist');
        // return res.status(HttpStatus.OK)({
        //     message: "Updated successfully",
        //     response
        // });
        return response;
    }

    @Delete() //'/delete'
    async delete(@Body() id: number){
        const response = await this.imageprojectService.deleteImage(id);
        if(!response) throw new NotFoundException('Poject does not exist');
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Card deleted Successfully',
        //             cardDeleted
        //         });
        return response;
    }

}