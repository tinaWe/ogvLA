import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { ProjectEntity} from "./project";
import { ProjectController} from "./project.controller";
import { ProjectService} from "./project.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProjectEntity])],
    controllers: [ProjectController],
    providers: [ProjectService],
})

export class ProjectModel{}