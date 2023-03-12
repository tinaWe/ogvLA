import {Schema} from 'mongoose';

export const CardSChema = new Schema({
    idCard : Number,
    title : {type: String, required: true},
    beschreibung : String,
    datum: Date,
    ort : String,
    veranstalter: String
});