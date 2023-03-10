import { Card } from "./card";
import { ImageProjekt } from "./imageProjekt";
import { Projekt } from "./projekt";

export interface Eventpingcard {
    label: string;
    object: Card;
}

export interface EventpingProjekt {
    label: string;
    object: ImageProjekt[];
}


