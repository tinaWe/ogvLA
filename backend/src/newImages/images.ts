import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";
import { Blob } from "buffer";

@Entity({name: "images"})
export class ImagesEntity{
     // @id
     @Column()//{name: 'email', length: 300, nullable: true, unique: true}
     galleryId: number;

     @PrimaryGeneratedColumn({name: 'id'})//
     id: number;
 
     @Column({type: "longblob"}) //{name: 'name', length: 200}
     image: Blob;
     // image: Buffer;
}


