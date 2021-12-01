import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {Users} from "./users.entity";
import { CreateUserDto } from './dto/createUser.dto';
import { ConnectUserDto } from './dto/connectUser.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    getUsers() : Users[] {
        return this.usersService.getUsers();
    }

    @Get("/:id")
    @UseGuards(JwtAuthGuard)
    getUsersById(@Param('id') userId : number) : Users {
        return this.usersService.getUsersById(userId);
    }

    @Post("add")
    @UseGuards(JwtAuthGuard)
    async createUser(
        @Body() newUser : CreateUserDto
    ) : Promise<Users> {
        return this.usersService.createUser(newUser);
    }

    @Post("auth")
    async loginUser(
        @Body() loginUser: ConnectUserDto
    ){
        return this.usersService.loginUser(loginUser)
    }
}
