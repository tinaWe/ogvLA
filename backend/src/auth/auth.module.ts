import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import {ConfigModule, ConfigService} from '@nestjs/config'
import { AuthService } from './services/auth.service';

@Module({
    imports:[
        JwtModule.registerAsync({
            imports:[ConfigModule],
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>(
                {secret: configService.get('JWT_SECRET'),
                    signOptions:{expiresIn: '100s'}
                })
        })
    ],
    providers: [AuthService, JwtService],
    exports: [AuthService]
})
export class AuthModule {}
