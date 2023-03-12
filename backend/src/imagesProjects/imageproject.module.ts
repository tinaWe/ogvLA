import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ProjectImagesEntity} from "./imagesprojects";
import { ImageProjectController} from "./imageproject.controller";
import { ImagesProjectService} from "./imageproject.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProjectImagesEntity])],
    controllers: [ImageProjectController],
    providers: [ImagesProjectService],
})

export class ImageProjectModel{}