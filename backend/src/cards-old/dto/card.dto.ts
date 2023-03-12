export class CreateCardDTO{
    readonly idCard : number;
    readonly title : string;
    readonly beschreibung : string;
    readonly datum?: Date;
    readonly ort? : string;
    readonly veranstalter?: string;
}