
import {Document} from 'mongoose';

export interface Card extends Document {
    idCard : number;
    readonly title : string;
    readonly beschreibung : string;
    readonly datum?: Date;
    readonly ort? : string;
    readonly veranstalter?: string;
}