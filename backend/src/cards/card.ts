import { Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";

@Entity({name: "cards"})
export class CardEntity extends BaseEntity{
    // @id
    @PrimaryGeneratedColumn({name: 'id'})//
    id: number;

    @Column() //{name: 'name', length: 200}
    title: string;

    @Column()//{name: 'email', length: 300, nullable: true, unique: true}
    beschreibung: string;

    @Column()//{name: 'password', length: 256, nullable: true}
    datum: Date;

    @Column()
    ort: string;

    @Column()
    veranstalter: string;

    @Column()
    link: string;

    // @Column()
    // bilde: ImageBitmap;
}


