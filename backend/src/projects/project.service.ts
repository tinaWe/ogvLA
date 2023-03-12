import { Injectable } from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Between, Repository,} from "typeorm";
import { ProjectEntity } from "./project";

@Injectable()
export class ProjectService{
    constructor(
      @InjectRepository(ProjectEntity)
        private projectRepository: Repository<ProjectEntity>,
    ){}

    getProjects(): Promise<ProjectEntity[]>{
        //Get all users
        return this.projectRepository.find();
        // find({
        //     select: {
        //       id: true,
        //       email: true,
        //       password: true,
        //     },
        //   })
    }

    async getProjectsOfYear(yearInput: number): Promise<ProjectEntity[]>{
        //Get all users
        const otherNumber = yearInput +5;
        const projekts = this.projectRepository.find({ 
            where:{
                year: Between(yearInput, otherNumber)
            }
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

    async getProject(id: number): Promise<ProjectEntity>{
        return  await this.projectRepository.findOneBy({id: id});
    }

    async createProject(project: ProjectEntity): Promise<ProjectEntity>{
        return await this.projectRepository.save(project);
    }

    async update(id: number, project: ProjectEntity) : Promise<ProjectEntity> {
        await this.projectRepository.update(id, project);
        return project; //Hier stellt sich noch die Frage, wie sinnvoll der Retrun-Value ist
    }

    async deleteProject(id: number): Promise<number>{
        await this.projectRepository.delete(id);
        return id;
    }

    
}


