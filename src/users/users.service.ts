import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ConnectUserDto } from './dto/connectUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { Users } from "./users.entity";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(
        private jwtService: JwtService
    ){}

    public users : Users[] = [
        {
            id:1,
            prenom: "Antho",
            nom: "Odin",
            mail: "antho.od@gmail.com",
<<<<<<< HEAD
            motdepasse: "bonjour",
            commande: [""]
=======
            motdepasse: "$2b$10$Qf0hRy5zgD9qr6.B3lNWk.34Sb7.pJUvv/oHd09KFlqnvU8wPki2m", //bonjour
            salt: "$2b$10$Qf0hRy5zgD9qr6.B3lNWk."
>>>>>>> master
        },
        {
            id:2,
            prenom:"Raja",
            nom:"Truc",
            mail: "rajtruc@tutu.com",
<<<<<<< HEAD
            motdepasse: "azer",
            commande: [""]
=======
            motdepasse: "$2b$10$phmFl7eiJxubrRRRCK1d3.1geRe7QS8FvL97ydyoRzChcVXad72cS", //azer
            salt: "$2b$10$phmFl7eiJxubrRRRCK1d3."
>>>>>>> master
        },
        {
            id:3,
            prenom: "Alex",
            nom:"Rust",
            mail: "alexrust@gmail.com",
<<<<<<< HEAD
            motdepasse: "trident",
            commande: [""]
=======
            motdepasse: "$2b$10$Hm.aFafUn3yO/Jqvxs0ES.k8F57CYUAYbqVIdfqkiPrX0A4QcD5FK", //trident
            salt: "$2b$10$Hm.aFafUn3yO/Jqvxs0ES."
>>>>>>> master
        }
    ]

    getUsers(): Users[] {
        const users = this.users; // On récupére la liste des users
        for (const u of users){
            delete u.motdepasse;
            delete u.salt;
            // On supprime le mot de passe et le salt pour sécuriser l'envoie de la liste des users.
        }
        return users; // On retourne la liste des users une fois modifier.
    }

    getUser(actualUser) : Users {
        const user = this.users.find((user : Users) => {
            return Number(user.id) === Number(actualUser.id); 
        });
        delete user.salt;
        delete user.motdepasse;
        // On supprime le mot de passe et le salt avant de l'envoyer.
        return user;
    }

    private nextId = 4;

    async createUser(
        userData: CreateUserDto,
    ) : Promise<Users> {
        const {email, password, nom, prenom} = userData;
        for(const u of this.users){
            if(u.mail === email){
                throw new ConflictException(`Le client a déjà été créer.`);
            }
        }
        const newUser = new Users();
        newUser.id = this.nextId;

        newUser.mail = email;
        newUser.nom = nom;
        newUser.prenom = prenom;
        newUser.salt = await bcrypt.genSalt();
        newUser.motdepasse = await bcrypt.hash(password, newUser.salt);
        
        this.nextId++;
        this.users.push(newUser);

        delete newUser.motdepasse;
        delete newUser.salt;
        return newUser;
    }

    async loginUser(loginUser: ConnectUserDto){
        const {email, password} = loginUser;

        for(const u of this.users){
            if(u.mail === email){
                const hashedPassword = await bcrypt.hash(password, u.salt);
                if(hashedPassword === u.motdepasse){
                    const payload = {
                        email: u.mail,
                        nom: u.nom,
                        prenom: u.prenom
                    }
                    const jwt = await this.jwtService.sign(payload);
                    return {
                        "access_token": jwt
                    };
                }else{
                    throw new NotFoundException(`Votre email ou votre mot de passe est erronée.`);
                }
            }else{
                throw new NotFoundException(`Votre email ou votre mot de passe est erronée.`);
            }
        }
    }
}
