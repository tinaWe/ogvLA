import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Any, Between, Repository,} from "typeorm";
import { resourceLimits } from "worker_threads";
import { ImageDto } from "./imageDto.dto";
import { ImagesEntity} from "./images";

@Injectable()
export class ImagesService{
    constructor(
        @InjectRepository(ImagesEntity)
          private galleryImageRepository: Repository<ImagesEntity>, //ImagesGalleryEntitiy
      ){}
  
      getImages(): Promise<ImagesEntity[]>{
          //Get all users
          return this.galleryImageRepository.find();
          // find({
          //     select: {
          //       id: true,
          //       email: true,
          //       password: true,
          //     },
          //   })
      }

    //---------------------------
    async getImagesOfGallery(galleryId: number): Promise<ImageDto[]>{
        //Get all images of gallery
        var ImageDto = null;
        const gallery = this.galleryImageRepository.find({ 
            where:{
            galleryId: galleryId
            }
        }).then(function(result){
            ImageDto = new ImageDto[result.length];
            for(let i = 1; i < result.length; i++){
                var buffer = result[i].image.text;
                // result[i].image = buffer.toString('base64');
                ImageDto[i] = result[i];
                ImageDto[i].image =  buffer.toString();
            }     
        });
       
        return await (await ImageDto);
    }
    //---------------------------

// //funktioniert
//       async getImagesOfGallery(galleryId: number): Promise<ImagesGalleryEntity[]>{
//           //Get all images of gallery
//           const gallery = this.galleryImageRepository.find({ 
//               where:{
//                 galleryId: galleryId
//               }
//           })
//           return await (await gallery);
//           // find({
//           //     select: {
//           //       id: true,
//           //       email: true,
//           //       password: true,
//           //     },
//           //this.projectRepository.find({ where: [ {year Between: ProjectEntity.arguments.year AND ProjectEntity.arguments.year+5}]});
//           //   })
//       }
  
      async getImage(id: number): Promise<ImagesEntity>{
          return await this.galleryImageRepository.findOne({
              where:{id: id}
          });
      }
  
      async createImages(image: ImagesEntity): Promise<ImagesEntity>{
          return await this.galleryImageRepository.save(image);
      }
  
      async update(id: number, image: ImagesEntity) : Promise<ImagesEntity> {
          await this.galleryImageRepository.update(id, image);
          return image; //Hier stellt sich noch die Frage, wie sinnvoll der Retrun-Value ist
      }
  
      async deleteImage(id: number): Promise<number>{
          await this.galleryImageRepository.delete(id);
          return id;
      }
    
}


