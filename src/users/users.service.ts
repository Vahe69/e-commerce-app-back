import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { ConnectUserDto } from './dto/connectUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { Users } from "./users.entity";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import {ProduitsService} from "../produits/produits.service";

@Injectable()
export class UsersService {
    constructor(
        private jwtService: JwtService,
        private produitService : ProduitsService
    ){}

    public users : Users[] = [
        {
            id:1,
            prenom: "Antho",
            nom: "Odin",
            mail: "antho.od@gmail.com",
            motdepasse: "$2b$10$Qf0hRy5zgD9qr6.B3lNWk.34Sb7.pJUvv/oHd09KFlqnvU8wPki2m", //bonjour
            salt: "$2b$10$Qf0hRy5zgD9qr6.B3lNWk.",
            commande: []
        },
        {
            id:2,
            prenom:"Raja",
            nom:"Truc",
            mail: "rajtruc@tutu.com",
            motdepasse: "$2b$10$phmFl7eiJxubrRRRCK1d3.1geRe7QS8FvL97ydyoRzChcVXad72cS", //azer
            salt: "$2b$10$phmFl7eiJxubrRRRCK1d3.",
            commande: []
        },
        {
            id:3,
            prenom: "Alex",
            nom:"Rust",
            mail: "alexrust@gmail.com",
            motdepasse: "$2b$10$Hm.aFafUn3yO/Jqvxs0ES.k8F57CYUAYbqVIdfqkiPrX0A4QcD5FK", //trident
            salt: "$2b$10$Hm.aFafUn3yO/Jqvxs0ES.",
            commande: []
        }
    ]

    getUsers(): Users[] {
        const users = [
            ...this.users
        ]; // On récupére la liste des users
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
        const result = {
            ...user
        }
        delete result.motdepasse;
        delete result.salt;
        // On supprime le mot de passe et le salt avant de l'envoyer.
        return result;
    }

    private nextId = 4;

    async createUser(
        userData: CreateUserDto,
    ) : Promise<Users> {
        const {email, password, verifiedPassword, nom, prenom} = userData;
        for(const u of this.users){
            if(u.mail === email){
                throw new ConflictException(`Le client a déjà été créer.`);
            }
        }
        if(password === verifiedPassword){
            const newUser = new Users();
            newUser.id = this.nextId;

            newUser.mail = email;
            newUser.nom = nom;
            newUser.prenom = prenom;
            newUser.salt = await bcrypt.genSalt();
            newUser.motdepasse = await bcrypt.hash(password, newUser.salt);
            
            this.nextId++;
            this.users.push(newUser);

            const result = {
                ...newUser
            }
            delete result.motdepasse;
            delete result.salt;
            return result;
        }else{
            throw new ConflictException(`Les deux mot des passe ne sont pas identiques.`)
        }
    }

    async loginUser(loginUser: ConnectUserDto){
        const {email, password} = loginUser;

        const user = await this.users.find((user : Users) => {
            return user.mail === email;
        })
        if(!user){
            throw new NotFoundException(`Votre email ou votre mot de passe est erronée.`);
        }
        const hashedPassword = await bcrypt.hash(password, user.salt);
        if(hashedPassword === user.motdepasse){
            const payload = {
                mail: user.mail,
                nom: user.nom,
                prenom: user.prenom
            }
            const jwt = await this.jwtService.sign(payload);
            return {
                "access_token": jwt
            };
        }else{
            throw new NotFoundException(`Votre email ou votre mot de passe est erronée.`);
        }
    }

    addCommande(user, id : number) {
        const userCommande = this.users.find((userCommande : Users) => {
            return Number(userCommande.id) === Number(user.id); 
        });
        const produit = this.produitService.getProduitById(id);
        return userCommande.commande.push(produit);
    }

    getCommande(user){
        const userCommande = this.users.find((userCommande : Users) => {
            return Number(userCommande.id) === Number(user.id); 
        });
        return userCommande.commande;
    }
}
