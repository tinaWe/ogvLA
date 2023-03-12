import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ImagesGalleryEntity} from "./imagesgallery";
import { ImagesGalleryController} from "./imagesgallery.controller";
import { ImagesGalleryService} from "./imagesgallery.service";

@Module({
    imports: [TypeOrmModule.forFeature([ImagesGalleryEntity])],
    controllers: [ImagesGalleryController],
    providers: [ImagesGalleryService],
})

export class ImagesGalleryModel{}