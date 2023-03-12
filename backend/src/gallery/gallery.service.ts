// import { Repository} from "typeorm";
import { Injectable } from "@nestjs/common";
import { GalleryEntity} from "./gallery";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository, Entity, PrimaryGeneratedColumn} from "typeorm";

@Injectable()
export class GalleryService{
    constructor(
      @InjectRepository(GalleryEntity)
        private galleryRepository: Repository<GalleryEntity>,
    ){}

    async getGallerys(){
        //Get all projects
        return await this.galleryRepository.find();
        // find({
        //     select: {
        //       id: true,
        //       email: true,
        //       password: true,
        //     },
        //   })
    }

    async getGalleryByYears(year : string): Promise<GalleryEntity[]>{
        const gallerys = this.galleryRepository.find({
            where: {
                year: year
            }});
        return await gallerys;     
    }

    async getGallery(id: number): Promise<GalleryEntity>{
        return await this.galleryRepository.findOne({
            where: {
                id: id
            }
        });;
    }

    async createGallery(gallery: GalleryEntity){
        return await this.galleryRepository.save(gallery);
    }

    async updateGallery(id: number, gallery: GalleryEntity): Promise<Number> {
        const updateGallery = await this.galleryRepository.update(id, gallery);
        return id;
    }

    async deleteGallery(id: number){
        await this.galleryRepository.delete(id);
        return {deleted: true};
    }

}


