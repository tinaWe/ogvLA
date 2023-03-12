import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put, Req, Res, UnauthorizedException} from "@nestjs/common";
import { access } from "fs";
import { map, Observable } from "rxjs";
import { UserEntity } from "./user";
import { User } from "./user.interface";
import { UserService } from "./user.service";
// const bcrypt = require('bcrypt');
import * as bcrypt from 'bcrypt';
import {Response, Request} from 'express';
import { JwtService } from "@nestjs/jwt";
import { Any } from "typeorm";
// import { sign } from "crypto";
import * as dotenv from 'dotenv';
import { AuthService } from "src/auth/services/auth.service";
dotenv.config();

@Controller('users')
export class UserController{

    constructor(private userService: UserService, 
        private readonly jwtService: JwtService,
        private readonly authService: AuthService){
    }

    //auth service 
    // @Post('login')
    // login(@Body()user: User): Observable<Object>{
    //     return this.userService.login(user).pipe(
    //         map((jwt: string) => {
    //             return {access_token: jwt};
    //         })
    //     )
    // }

    // @Post('create')
    // async createUser(@Body() createUserDto: UserEntity): Promise<UserEntity>{
    //     const response = await this.userService.createUser(createUserDto);
    //     console.log(createUserDto);
    //     return response;
    // }

    @Post('register')
    async register(
        @Body()createUserDto: UserEntity
    ): Promise<UserEntity>{
    
        const newUser = createUserDto;
        if(createUserDto.password != undefined){
             const hashedPassword = await bcrypt.hash(createUserDto.password, 12);
             newUser.password = hashedPassword.toString();
        }else{
            throw new BadRequestException('invalid credentials' + createUserDto); 
        }
       
        // const hashedPassword = this.authService.hashPassword(createUserDto.password);

        // const user = await this.userService.create({
        //     name,
        //     email,
        //     position,
        //     password: hashedPassword
        // });

        // const newUser = createUserDto;
        // newUser.password = hashedPassword.toString();

        const user = await this.userService.register(newUser);

        delete user.password;

        return user;
    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ) {
        const user = await this.userService.findByMail(email);

        // const password = "test";
        if (!user) {
            throw new BadRequestException('invalid credentials' + 'account not exist');
        }

        console.log("hier bin ich");
        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('invalid credentials' + 'wrong password');
        }

        console.log(this.jwtService);
        const jwt = this.jwtService.sign({ id: user.id }, 'hardtoguesssecret');
        // const jwt = this.authService.generateJWT(user);
        console.log(jwt);
        // throw new UnauthorizedException('jwt is null ' + jwt);


        response.cookie('JWT', jwt, {httpOnly: true});

        return {
            message: 'success'
        };
    }

    @Get('user')
    async user(@Req() request: Request) {
        try {
            const cookie = request.signedCookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException('nicht erwartet');
            }

            const user = await this.userService.findById({id: data['id']});

            const {password, ...result} = user;

            return result;
        } catch (e) {
            throw new UnauthorizedException('catch e');
        }
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        }
    }

    //----------------------------------------------------------------------------------------
    //Alle unveränderten funktionierenden Aufrufen
    @Get()
    async fillAllUser(){
        const response = await this.userService.findAllUser();
        return response;
        // res.status(HttpStatus.OK).json({payload: response});
    }
  

    @Get(':id')
    async findOneUser(@Param('id') id: number){
        const response = await this.userService.findOneUser(id);
        return response;
    }

    @Post('create')
    async createUser(@Body() createUserDto: UserEntity): Promise<UserEntity>{
        const response = await this.userService.createUser(createUserDto);
        console.log(createUserDto);
        return response;
    }

    @Put('/update/:id')
    async updateUser(@Param('id') id: number, @Body() createUserDto: UserEntity): Promise<UserEntity>{
        const response = await this.userService.updateUser(id, createUserDto);
        // return res.status(HttpStatus.OK)({
        //     message: "Updated successfully",
        //     response
        // });
        return response;
    }

    @Delete('/delete/:id')
    async deleteUser(@Param() id: number){
        const response = await this.userService.removeUser(id);
        return response;
    }



}