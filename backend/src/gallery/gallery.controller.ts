import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException } from "@nestjs/common";
import { GalleryEntity} from "./gallery";
import { GalleryService} from "./gallery.service";

@Controller('gallery')
export class GalleryController{
    constructor(private galleryService: GalleryService){
    }

    @Get()
    async getGallerys(){
        const response = await this.galleryService.getGallerys(); //Where: projectId = projectId
        return response;
                // return res.status(HttpStatus.OK).json({
                //     message: 'Alle Gallerien',
                //     response
                // });
    }


    @Get('')
    async getGallery(@Param('id') id: number, @Res() res){
        const response = await this.galleryService.getGallery(id);
        if(!response) throw new NotFoundException('Gallery does not exist');
        // return response;
        return res.status(HttpStatus.OK).json({
            response
        });
    }

    @Get(':year')
    async getGalleryByYears(@Param('year') year: string, @Res() res){
        const response = await this.galleryService.getGalleryByYears(year);
        if(!response) throw new NotFoundException('Gallery in this year does not exist');
        // return response;
        return res.status(HttpStatus.OK).json({
            response
        });
    }

    @Post('/create')//'/create'
    async create(@Body() createGalleryDto: GalleryEntity){
        const response = await this.galleryService.createGallery(createGalleryDto);
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Gallery successfully created',
        //             response
        //         });
    }

    @Put('/update:id')
    async update(@Param() id: number, @Body() createGalleryDto: GalleryEntity){
        const response = await this.galleryService.updateGallery(id, createGalleryDto);
        if(!response) throw new NotFoundException('Gallery does not exist');
        // return res.status(HttpStatus.OK)({
        //     message: "Updated successfully",
        //     response
        // });
        return response;
    }

    @Delete('/delete/:id') //'/delete'
    async delete(@Param('id') id: number){
        const response = await this.galleryService.deleteGallery(id);
        if(!response) throw new NotFoundException('Gallery not deleted');
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Gallery deleted Successfully',
        //             response
        //         });
    }
}