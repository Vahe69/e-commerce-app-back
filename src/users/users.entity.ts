import { Produit } from "src/produits/produits.interface";

export class Users {
    id:number;
    prenom: string;
    nom: string;
    mail:string;
    motdepasse:string;
    salt: string;
    commande: Produit[];
}