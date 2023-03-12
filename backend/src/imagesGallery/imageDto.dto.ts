import { IsNumber, IsString, IsDate} from "class-validator";

export class ImageDto{

    @IsNumber()
    id: number;

    @IsNumber()//{name: 'email', length: 300, nullable: true, unique: true}
    galleryId: number;

    @IsString() //{name: 'name', length: 200}
    image: string;
}