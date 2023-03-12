import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ImagesEntity} from "./images";
import { ImagesController} from "./images.controller";
import { ImagesService} from "./images.service";

@Module({
    imports: [TypeOrmModule.forFeature([ImagesEntity])],
    controllers: [ImagesController],
    providers: [ImagesService],
})

export class ImagesModel{}