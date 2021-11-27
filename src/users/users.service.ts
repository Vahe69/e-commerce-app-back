import { Injectable } from '@nestjs/common';
import {Users} from "./users.interface";

@Injectable()
export class UsersService {
    private users = [
        {
            id:1,
            prenom: "Antho",
            nom: "Odin",
            mail: "antho.od@gmail.com",
            motdepasse: "bonjour"
        },
        {
            id:2,
            prenom:"Raja",
            nom:"Truc",
            mail: "rajtruc@tutu.com",
            motdepasse: "azer"
        },
        {
            id:3,
            prenom: "Alex",
            nom:"Rust",
            mail: "alexrust@gmail.com",
            motdepasse: "trident"
        }
    ]

    getUsers(): Users[] {
        return this.users;
    }

    getUsersById(id : number) : Users {
        return this.users.find((user: Users) => {
            return Number(user.id) === Number(id);
        })
    }
    private nextId = 4;
    createUser(
        userData: Omit<Users, 'id'>,
    ) : Users {
        const newUser = {
            id: this.nextId,
            ...userData,
        };
        this.nextId++;
        this.users.push(newUser);

        return newUser;
    }
}
