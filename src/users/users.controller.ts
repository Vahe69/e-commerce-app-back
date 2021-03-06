import {Body, Controller, Get, Param, ParseIntPipe, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {Users} from "./users.entity";
import { CreateUserDto } from './dto/createUser.dto';
import { ConnectUserDto } from './dto/connectUser.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { User } from 'src/decorators/user.decorator';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    getUsers() : Users[] {
        return this.usersService.getUsers();
    }

    @Get("auth")
    @UseGuards(JwtAuthGuard)
    getUser(
        @User() user
    ) : Users {
        return this.usersService.getUser(user);
    }

    @Post("add")
    async createUser(
        @Body() newUser : CreateUserDto
    ) : Promise<Users> {
        return this.usersService.createUser(newUser);
    }

    @Post("auth")
    async loginUser(
        @Body() loginUser: ConnectUserDto
    ){
        return this.usersService.loginUser(loginUser);
    }

    @Get("commande")
    @UseGuards(JwtAuthGuard)
    getCommande(
        @User() user
    ){
        return this.usersService.getCommande(user);
    }

    @Post("commande/:id")
    @UseGuards(JwtAuthGuard)
    addCommande(
        @Param('id', ParseIntPipe) commandeId: number,
        @User() user
    ){
        return this.usersService.addCommande(user, commandeId);
    }

    

}
