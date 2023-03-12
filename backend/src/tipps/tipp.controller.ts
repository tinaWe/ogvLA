import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException } from "@nestjs/common";
import {TippEntity} from "./tipp";
import {TippService} from "./tipp.service";

@Controller('tipps')
export class TippController{
    constructor(private tippService: TippService){
    }

    @Get()
    async getTipps(){
        const response = await this.tippService.getTipps();
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }
  
    @Get(':id')
    async getTipp(@Param('id') id: number){
        const response = await this.tippService.getTipp(id);
        if(!response) throw new NotFoundException('Tipp does not exist');
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }

    @Post('/create') //'/create'
    async create(@Body() tippEntity: TippEntity){
        const response = await this.tippService.createTipp(tippEntity);
        console.log(tippEntity);
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Project successfully created',
        //             response
        //         });
    }

    @Put('/update/:id')
    async update(@Param('id') id: number, @Body() tippEntity: TippEntity){
        const response = await this.tippService.update(id, tippEntity);
        if(!response) throw new NotFoundException('Tipp does not exist');
        // return res.status(HttpStatus.OK)({
        //     message: "Updated successfully",
        //     response
        // });
        return response;
    }

    @Delete('/delete/:id') //'/delete'
    async delete(@Param('id') id: number){
        const response = await this.tippService.deleteTipp(id);
        if(!response) throw new NotFoundException('Tipp not deleted');
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Card deleted Successfully',
        //             cardDeleted
        //         });
        return response;
    }

}