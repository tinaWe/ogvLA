// import { Injectable } from '@nestjs/common';
// import {Model} from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
// import { Card } from './interfaces/card.interface';
// import { CreateCardDTO } from './dto/card.dto';

// @Injectable()
// export class CardsService {


//     private cards = [
//         {
//             idCard : '0',
//             title : 'liste',
//             beschreibung : 'details',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'neumarkt',
//             veranstalter: 'renate'
//           },
//           {
//             idCard :' 1',
//             title : 'test',
//             beschreibung : 'details abc',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'amberg',
//             veranstalter: 'renate'
//           },
//           {
//             idCard : '2',
//             title : 'leben',
//             beschreibung : 'details abc',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'nürnberg',
//             veranstalter: 'renate'
//           },
//           {
//             idCard : '3',
//             title : 'yess',
//             beschreibung : 'details abc',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'amberg',
//             veranstalter: 'renate'
//           }
//           ,  {
//             idCard : '4',
//             title : 'test',
//             beschreibung : 'details abc',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'amberg',
//             veranstalter: 'renate'
//           }
//           ,
//           {
//             idCard : '5',
//             title : 'test',
//             beschreibung : 'details abc',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'amberg',
//             veranstalter: 'renate'
//           },
//           {
//             idCard : '6',
//             title : 'test',
//             beschreibung : 'details abc',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'nürnberg',
//             veranstalter: 'renate'
//           },
//           {
//             idCard : '7',
//             title : 'test',
//             beschreibung : 'details abc',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'amberg',
//             veranstalter: 'renate'
//           },
//           {
//             idCard : '8',
//             title : 'dieben',
//             beschreibung : 'details abc',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'amberg',
//             veranstalter: 'renate'
//           },
//           {
//             idCard : '9',
//             title : 'last',
//             beschreibung : 'last',
//             datum: new Date("Fri Dec 08 2019 07:44:57"),
//             ort : 'last',
//             veranstalter: 'last'
//           }
//     ];

//     constructor(@InjectModel('Card') private readonly cardModel: Model<Card>){}

//     //first try of backend
//     // getCards(){
//     //     return this.cards;
//     // }

//     //Get a  Cards
//     async getCards(): Promise<Card[]>{
//       const cards = await this.cardModel.find();
//       return cards;
//     }

//     //Get a single Card
//     async getCard(idCard: number): Promise<Card>{
//       const card = await this.cardModel.findById(idCard);
//       return card;
//     }

//     //Post a single card
//     async createCard(createProductDTO: CreateCardDTO): Promise<Card>{
//       const newCard = new this.cardModel(createProductDTO);
//       return newCard.save();
//     }
//     //delete Card
//     async deleteCard(idCard: number): Promise<Card>{
//       const deletedCard = await this.cardModel.findByIdAndDelete(idCard);
//       return deletedCard;
//     }
    
//     //Put a single card
//     async updateCard(idCard: number, createCardDTO: CreateCardDTO): Promise<Card>{
//       const updateCard = await this.cardModel
//                           .findByIdAndUpdate(idCard, createCardDTO, {new: true});
//       return updateCard;
//     }
// }
