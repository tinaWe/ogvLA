import { Entity, Column, PrimaryGeneratedColumn, Index} from "typeorm";

@Entity({name: "tipps"})
export class TippEntity{
    // @id
    @PrimaryGeneratedColumn({name: 'id'})//
    id: number;

    @Column() //{name: 'name', length: 200}
    title: string;

    @Column()//{name: 'email', length: 300, nullable: true, unique: true}
    beschreibung: string;

    @Column()//{name: 'password', length: 256, nullable: true}
    link: string;

    @Column()//{name: 'password', length: 256, nullable: true}
    cardType: string;
}


