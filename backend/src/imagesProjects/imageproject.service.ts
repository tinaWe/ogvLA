import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Between, Repository,} from "typeorm";
import { ProjectImagesEntity } from "./imagesprojects";

@Injectable()
export class ImagesProjectService{
    constructor(
      @InjectRepository(ProjectImagesEntity)
        private projectImageRepository: Repository<ProjectImagesEntity>,
    ){}

    getImages(): Promise<ProjectImagesEntity[]>{
        return this.projectImageRepository.find();
    }

    async getImagesOfProject(projectID: number): Promise<ProjectImagesEntity[]>{
        //Get all users
        const projekts = this.projectImageRepository.find({ 
            where:{projectID: projectID},
            take:4,
        });
        return await projekts;
        // find({
        //     select: {
        //       id: true,
        //       email: true,
        //       password: true,
        //     },
        //this.projectRepository.find({ where: [ {year Between: ProjectEntity.arguments.year AND ProjectEntity.arguments.year+5}]});
        //   })
    }

    async getImage(id: number): Promise<ProjectImagesEntity>{
        return  await this.projectImageRepository.findOne({
            where:{imageID: id}
        });
    }

    async createImages(image: ProjectImagesEntity): Promise<ProjectImagesEntity>{
        return await this.projectImageRepository.save(image);
    }

    async update(id: number, image: ProjectImagesEntity) : Promise<ProjectImagesEntity> {
        await this.projectImageRepository.update(id, image);
        return image; //Hier stellt sich noch die Frage, wie sinnvoll der Retrun-Value ist
    }

    async deleteImage(id: number): Promise<number>{
        await this.projectImageRepository.delete(id);
        return id;
    }

    
}


