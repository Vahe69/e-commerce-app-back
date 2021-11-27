import { Injectable } from '@nestjs/common';
import {Produit} from "./produits.interface";

@Injectable()
export class ProduitsService {
    private produit = [
        {
            id: 1,
            name : "Chemise",
            prix : 15,
            description: "Chemise avec beaucoup de classe ! ",
            image : "",
            comment : "",
            rating: "",
        },
        {
            id:2,
            name:"Pantalon",
            prix: 25,
            description: "Le pantalon va très bien avec la chemise !",
            image: "",
            comment: "",
            rating:""
        }
    ]

    getProduits() : Produit[] {
        return this.produit;
    }

    getProduitById(id: number): Produit {
        return this.produit.find((produit : Produit) => {
            return Number(produit.id) === Number(id);
        })
    }

    private nextId = 4;
    createProduit(
        produitData: Omit<Produit, 'id'>,
    ) : Produit {
        const newProduit = {
            id: this.nextId,
            ...produitData,
        };
        this.nextId++;
        this.produit.push(newProduit);

        return newProduit;
    }
}
