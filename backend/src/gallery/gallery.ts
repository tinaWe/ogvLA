import { Entity, Column, PrimaryGeneratedColumn, Index} from "typeorm";
import { Blob } from "buffer";

@Entity({name: "gallery"})
export class GalleryEntity{
    // @id
    @Column({name: 'year', length: '4'}) //{name: 'name', length: 200}
    year: string;

    @PrimaryGeneratedColumn({name: 'id'})
    id: number;

    @Column() //{name: 'name', length: 200}
    name: string;
    // @Column()//{name: 'email', length: 300, nullable: true, unique: true}
    // bilder: ImageData;

    @Column({type: "longblob"}) //{name: 'name', length: 200}
    image: Blob;
}


