import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { GalleryEntity } from "./gallery";
import { GalleryController} from "./gallery.controller";
import { GalleryService} from "./gallery.service";

@Module({
    imports: [TypeOrmModule.forFeature([GalleryEntity])],
    controllers: [GalleryController],
    providers: [GalleryService],
})

export class GalleryModel{}