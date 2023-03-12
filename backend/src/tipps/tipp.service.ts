import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository,} from "typeorm";
import {TippEntity } from "./tipp";

@Injectable()
export class TippService{
    constructor(
      @InjectRepository(TippEntity)
        private tippRepository: Repository<TippEntity>,
    ){}

    getTipps(): Promise<TippEntity[]>{
        return this.tippRepository.find();
    }


    async getTipp(id: number): Promise<TippEntity>{
        return  await this.tippRepository.findOneBy({id: id});
    }

    async createTipp(tipp: TippEntity): Promise<TippEntity>{
        return await this.tippRepository.save(tipp);
    }

    async update(id: number, tipp: TippEntity) : Promise<TippEntity> {
        await this.tippRepository.update(id, tipp);
        return tipp; //Hier stellt sich noch die Frage, wie sinnvoll der Retrun-Value ist
    }

    async deleteTipp(id: number): Promise<number>{
        await this.tippRepository.delete(id);
        return id;
    }

    
}


