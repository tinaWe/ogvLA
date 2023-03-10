
export interface Card {
    id : number;
    title : string;
    beschreibung : string;
    datum?: Date;
    ort? : string;
    veranstalter?: string;
    link?: string;
    // bild: ImageBitmap
}
