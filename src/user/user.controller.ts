import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.entity";

// @ts-ignore
// @ts-ignore
@Controller('users')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Get('users')
    async all(): Promise<User[]> {
        return await this.userService.all();
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
