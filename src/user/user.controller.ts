import {Body, Controller, Delete, Get, Param, Post, Put, Req, Res} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {JwtService} from "@nestjs/jwt";
import {Request} from 'express';

// @ts-ignore
// @ts-ignore
@Controller('users')
export class UserController {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
        ) {
    }

    @Get('users')
    async all(): Promise<User[]> {
        return await this.userService.all();
    }

    @Get('profile')
    async profile(@Req() request: Request){

        const token = request.cookies['jwt'];
        const  data = await this.jwtService.verifyAsync(token);
        return this.userService.findOne({id: data.id});
    }


    @Post('user')
    create (@Body() data): Promise<User> {
        return this.userService.create(data);
    }

    @Get(':id')
    getUserById(@Param('id') id: number): Promise<User> {
        return this.userService.findOne({id});
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() data
    ): Promise<User> {
        return await this.userService.update(id, data);
    }

    @Delete(':id')
    delete(@Param('id') id: number): Promise<any> {
        return this.userService.delete(id);
    }



}
