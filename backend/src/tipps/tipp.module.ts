import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TippEntity} from "./tipp";
import { TippController} from "./tipp.controller";
import {TippService} from "./tipp.service";

@Module({
    imports: [TypeOrmModule.forFeature([TippEntity])],
    controllers: [TippController],
    providers: [TippService],
})

export class TippModel{}