// import { Repository} from "typeorm";
import { Injectable } from "@nestjs/common";
import { CardEntity} from "./card";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import { CardDto } from "./cardDto.dto";

@Injectable()
export class CardService{
    constructor(
      @InjectRepository(CardEntity)
        private cardRepository: Repository<CardEntity>,
    ){}

    async getCards(): Promise<CardDto[]>{
        //Get all users
        return await this.cardRepository.find();
        // find({
        //     select: {
        //       id: true,
        //       email: true,
        //       password: true,
        //     },
        //   })
    }

    async getCard(id: number): Promise<CardDto>{
        return await this.cardRepository.findOneBy({id: id});
    }

    async createCard(card: CardDto): Promise<CardDto>{
        return this.cardRepository.save(card);
    }

    public async updateCard(id: number, card: CardDto): Promise<CardDto>{
         await this.cardRepository.update(id, card);
        // .findByIdAndUpdate(id, card, {new: true});
        return card;
    }

    public async deleteCard(id: number): Promise<number>{
         await this.cardRepository.delete(id);   
         return id;  
    }
}


