import {Controller, Get, Param} from '@nestjs/common';
import {UsersService} from "./users.service";
import {Users} from "./users.interface";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    getUsers() : Users[] {
        return this.usersService.getUsers();
    }

    @Get("/:id")
    getUsersById(@Param('id') userId : number) : Users {
        return this.usersService.getUsersById(userId);
    }
}
