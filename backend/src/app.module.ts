import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardEntity } from './cards/card';
import { CardController } from './cards/card.controller';
import { CardModel } from './cards/card.module';
import { CardService } from './cards/card.service';
import { GalleryEntity } from './gallery/gallery';
import { GalleryModel } from './gallery/gallery.module';
import { ImagesGalleryEntity } from './imagesGallery/imagesgallery';
import { ImagesGalleryModel } from './imagesGallery/imagesgallery.module';
import { ImageProjectModel } from './imagesProjects/imageproject.module';
import { ProjectImagesEntity } from './imagesProjects/imagesprojects';
import { ImagesEntity } from './newImages/images';
import { ImagesModel } from './newImages/imagesgallery.module';
import { ProjectEntity } from './projects/project';
import { ProjectModel } from './projects/project.module';
import { TippEntity } from './tipps/tipp';
import { TippModel } from './tipps/tipp.module';
import { UserEntity } from './user/user';
import { UserModel } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModel, GalleryModel, ProjectModel, CardModel, ImageProjectModel, ImagesGalleryModel, TippModel, ImagesModel,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'ogv',
    entities: [UserEntity, GalleryEntity, ProjectEntity, CardEntity, ProjectImagesEntity, ImagesGalleryEntity, TippEntity, ImagesEntity],
    synchronize: true,
  }),TypeOrmModule.forFeature([UserEntity]),
//   JwtModule.register({
//     secret: process.env.JWT_SECRET_KEY,
//     signOptions:{expiresIn: '1d'}
// }),
//   JwtModule.register({
//     secret: 'secret',
//     signOptions: {expiresIn: '1d'}
// })
//   JwtModule.registerAsync({
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
