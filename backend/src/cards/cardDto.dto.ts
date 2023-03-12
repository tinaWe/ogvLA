import { IsNumber, IsString, IsDate} from "class-validator";

export class CardDto{

    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    beschreibung: string;

    @IsDate()
    datum: Date;

    @IsString()
    ort: string;

    @IsString()
    veranstalter: string;

    @IsString()
    link: string;

    // @Column()
    // bilde: ImageBitmap;
}


