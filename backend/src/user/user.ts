import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";

@Entity({name: "users"})
export class UserEntity{
    // @id
    @PrimaryGeneratedColumn({name: 'id'})//
    id: number;

    @Column() //{name: 'name', length: 200}
    name: string;

    @Column()//{name: 'email', length: 300, nullable: true, unique: true}
    email: string;

    @Column()//{name: 'password', length: 256, nullable: true}
    password: string;

    @Column()
    position: string;

    @BeforeInsert()
    emailToLowerCase(){
        this.email = this.email.toLowerCase();
    }
}


