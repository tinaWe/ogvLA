// import { Repository} from "typeorm";
import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, Entity, PrimaryGeneratedColumn} from "typeorm";
import { AuthService } from "src/auth/services/auth.service";
// import { User } from "./user.interface";
import { from, Observable, throwError, map} from "rxjs";
import {switchMap, catchError} from "rxjs/operators";

@Injectable()
export class UserService{
    constructor(
      @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async register(user: UserEntity): Promise<UserEntity>{
        return this.userRepository.save(user);
    }

    async create(data: any): Promise<UserEntity> {
        return this.userRepository.save(data);
    }

    async findByMail(email: string): Promise<UserEntity> {
        return this.userRepository.findOneBy({email: email});
    }

    async findById(condition: any): Promise<UserEntity> {
        return this.userRepository.findOne(condition);
    }

    
    //----------------------erster Versuch
    // create(user: UserEntity): Observable<User> {
    //     return this.authService.hashPassword(user.password).pipe(
    //         switchMap((passwordHash: string) => {
    //             const newUser = new UserEntity();
    //             newUser.name = user.name;
    //             newUser.email = user.email;
    //             newUser.password = passwordHash;
    //             newUser.position = user.position;

    //             return from(this.userRepository.save(newUser)).pipe(
    //                 map((user: User) => {
    //                     const {password, ...result} = user;
    //                     return result;
    //                     // return user;
    //                 }),
    //                 catchError(err => throwError(err))
    //             )
    //         })
    //     )
    // }



        // login(user: User): Observable<string>{
        //     return this.validateUser(user.email, user.password).pipe(
        //         switchMap((user: User) => {
        //             if(user){
        //                 return this.authService.generateJWT(user).pipe(map((jwt: string) => jwt));
        //             }else{
        //                 return 'Falsche Eingaben';
        //             }
        //         })
        //     )
        // }

        // validateUser(email: string, password: string): Observable<User>{
        //     return this.findByMail(email).pipe(
        //         switchMap((user: UserEntity) => this.authService.comparePasswords(password, user.password).pipe(
        //             map((match: boolean) => {
        //                 if(match){
        //                     const{password, ...result} = user;
        //                     return result;
        //                 }else{
        //                     throw Error;
        //                 }
        //             })
        //         ))
        //     )
        // }

        // findByMail(email: string): Observable<User>{
        //     return from(this.userRepository.findOneBy({email: email}));
        // }

    //------------------------------------------------------------------------------
    //Alle unveränderten funktionierenden Methoden
    
    findAllUser(): Promise<UserEntity[]>{
        //Get all users
        return this.userRepository.find();
        // find({
        //     select: {
        //       id: true,
        //       email: true,
        //       password: true,
        //     },
        //   })
    }

    findOneUser(id: number): Promise<UserEntity>{
        return this.userRepository.findOneBy({id: id});
    }

    async createUser(user: UserEntity): Promise<UserEntity>{
        return await this.userRepository.save(user);
    }

    async updateUser(id: number, user: UserEntity): Promise<any> {
         await this.userRepository.update(id, user);
    }

    async removeUser(id: number): Promise<void>{
        await this.userRepository.delete(id);
    }
}


