import { Entity, Column, PrimaryGeneratedColumn, Index} from "typeorm";

@Entity({name: "projects"})
export class ProjectEntity{
    // @id
    @PrimaryGeneratedColumn({name: 'id'})//
    id: number;

    @Column() //{name: 'name', length: 200}
    title: string;

    @Column()//{name: 'email', length: 300, nullable: true, unique: true}
    beschreibung: string;

    @Column()//{name: 'password', length: 256, nullable: true}
    datum: string;

    @Column({name: 'year'})//{name: 'password', length: 256, nullable: true}
    year: number;
}


