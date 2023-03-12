// import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
// import { CardsService } from './cards.service';
// import { CreateCardDTO } from './dto/card.dto';

// @Controller('card')
// export class CardsController {

//     constructor(private cardsService: CardsService){ }

//     //First try of backend
//     // @Get()
//     // getCards(){
//     //     return this.cardsService.getCards();
//     // }

//     @Post('/create')
//     async createPost(@Res() res, @Body() createCardDTO: CreateCardDTO){
//         const card = await this.cardsService.createCard(createCardDTO);
//         return res.status(HttpStatus.OK).json({
//             message: 'Card successfully created',
//             card
//         });
//     }

//     @Get('/')
//     async getCards(@Res() res){
//         const cards = await this.cardsService.getCards();
//         return res.status(HttpStatus.OK).json({
//             cards
//         });
//     }

//     @Get('/:cardID')
//     async getCard(@Res() res, @Param('cardID') cardID){
//         const card = await this.cardsService.getCard(cardID);
//         if(!card) throw new NotFoundException('Card does not exist');
//         return res.status(HttpStatus.OK).json({
//             card
//         });
//     }

//     @Delete('/delete')
//     async deleteCard(@Res() res, @Query('cardID') cardID){
//         const cardDeleted = await this.cardsService.deleteCard(cardID);
//         if(!cardDeleted) throw new NotFoundException('Card does not exist');
//         return res.status(HttpStatus.OK).json({
//             message: 'Card deleted Successfully',
//             cardDeleted
//         });
//     }

//     @Put('/update/:cardID')
//     async updateCard(@Res() res, @Body() createCardDTO: CreateCardDTO, @Query('cardID') cardID){
//         const updateCard = await this.cardsService.updateCard(cardID, createCardDTO);
//         if(!updateCard) throw new NotFoundException('Card does not exist');
//         return res.status(HttpStatus.OK).json({
//             message: 'Card updated Successfully',
//             updateCard
//         });
//     }
// }
