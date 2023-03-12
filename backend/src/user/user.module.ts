import {Module} from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";
import {TypeOrmModule} from "@nestjs/typeorm";
import { AuthModule } from "src/auth/auth.module";
import { UserEntity } from "./user";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import * as dotenv from 'dotenv';
import { AuthService } from "src/auth/services/auth.service";
dotenv.config();

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.registerAsync({
            useFactory: () => ({
              secret: 'hardtoguesssecret'
            })
          })
        // JwtModule.register({
        //     secret: process.env.JWT_SECRET_KEY,
        //     signOptions:{expiresIn: '1d'}
        // }),
                    // secret: 'secret',
        // JwtModule.registerAsync({
        //     imports: [ConfigModule],
        //     useFactory: async (configService: ConfigService) => {
        //       return {
        //         secretOrKey: `${process.env.JWT_SECRET_KEY}`,
        //         signOptions:{expiresIn: '100s'}
        //       };
        //     },
        //     inject: [ConfigService],
        // }),
        ],
    controllers: [UserController],
    providers: [UserService, JwtService, AuthService],
    
})

// configService.get<string>('JWT_SECRET')

export class UserModel{}