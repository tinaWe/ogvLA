import { Body, Controller, Delete, Get, Param, Post, Put, Res, HttpStatus, NotFoundException } from "@nestjs/common";
import { ProjectEntity} from "./project";
import { ProjectService} from "./project.service";

@Controller('projects')
export class ProjectController{
    constructor(private projectService: ProjectService){
    }

    @Get()
    async getProjects(){
        const response = await this.projectService.getProjects();
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }

    @Get(':year')
    async getProjectsOfYear(@Param('year') year: number){
        const response = await this.projectService.getProjectsOfYear(year);
        if(!response) throw new NotFoundException('Project in this years does not exist');
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }
  
    @Get(':id')
    async getProject(@Param('id') id: number){
        const response = await this.projectService.getProject(id);
        if(!response) throw new NotFoundException('Project does not exist');
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             response
        //         });
    }

    @Post('/create') //'/create'
    async create(@Body() createProjectDto: ProjectEntity){
        const response = await this.projectService.createProject(createProjectDto);
        console.log(createProjectDto);
        return response;
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Project successfully created',
        //             response
        //         });
    }

    @Put('/update/:id')
    async update(@Param('id') id: number, @Body() createProjectDto: ProjectEntity){
        const response = await this.projectService.update(id, createProjectDto);
        if(!response) throw new NotFoundException('Project does not exist');
        // return res.status(HttpStatus.OK)({
        //     message: "Updated successfully",
        //     response
        // });
        return response;
    }

    @Delete('/delete/:id') //'/delete'
    async delete(@Param('id') id: number){
        const response = await this.projectService.deleteProject(id);
        if(!response) throw new NotFoundException('Poject not deleted');
        //         return res.status(HttpStatus.OK).json({
        //             message: 'Card deleted Successfully',
        //             cardDeleted
        //         });
        return response;
    }

}