import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { CardEntity} from "./card";
import { CardController} from "./card.controller";
import { CardService} from "./card.service";

@Module({
    imports: [TypeOrmModule.forFeature([CardEntity])],
    controllers: [CardController],
    providers: [CardService],
})

export class CardModel{}