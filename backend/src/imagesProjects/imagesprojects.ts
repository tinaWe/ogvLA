import { Blob } from "buffer";
import { Entity, Column, PrimaryGeneratedColumn, Index} from "typeorm";

@Entity({name: "imagesprojects"})
export class ProjectImagesEntity{
    // @id
    @PrimaryGeneratedColumn({name: 'id'})//
    imageID: number;

    @Column({type: "longblob"}) //{name: 'name', length: 200}
    image: Blob;
    // image: Buffer;

    @Column()//{name: 'email', length: 300, nullable: true, unique: true}
    projectID: number;
}



