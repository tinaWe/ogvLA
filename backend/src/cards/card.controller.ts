import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException, Query } from "@nestjs/common";
import { CardEntity } from "./card";
import { CardService} from "./card.service";
import { CardDto } from "./cardDto.dto";

@Controller('cards')
export class CardController{
    constructor(private cardService: CardService){
    }

    @Get() //'/'
     async getCards(){ //Res() res
        const response =  await this.cardService.getCards();
        return response;
        //  return res.status(HttpStatus.OK).json({
        //             cards
        //         });
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number){
        const response = await this.cardService.getCard(id);
        if(!response) throw new NotFoundException('Card does not exist');
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             card
        //         });
    }

    @Post('/create') //'/create'
    async createCard(@Body() createCardDto: CardDto){
        const response = await this.cardService.createCard(createCardDto);
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Card successfully created',
        //             card
        //         });
    }

    @Put('/update/:id')
    update(@Param('id') id: number, @Body() createCardDto: CardDto){ //@Res() res, @Body() createCardDTO: CreateCardDTO, @Query('cardID') cardID
        const response =  this.cardService.updateCard(id, createCardDto);
        if(!response) throw new NotFoundException('Card does not update');
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Card updated Successfully',
        //             updateCard
        //         });
        return response;
    }

    @Delete('/delete/:id') //'/delete' Query
    async delete(@Param('id') id: number){
        const response = await this.cardService.deleteCard(id);
        if(!response) throw new NotFoundException('Card not deleted');
                // return res.status(HttpStatus.OK).json({
                //     message: 'Card deleted Successfully',
                //     response
                // });
    }
}