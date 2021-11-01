import {isNotEmpty} from "class-validator"

export interface Users {
    //@String
    //@isNotEmpty()
    id:number;
    prenom: string;
    nom: string;
    mail:string;
    motdepasse:string;
}