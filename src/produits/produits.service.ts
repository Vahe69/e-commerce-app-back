import { Injectable } from '@nestjs/common';
import {Produit} from "./produits.interface";

@Injectable()
export class ProduitsService {
    private produit = [
        {
            id: 1,
            name: "Pantalon marron homme",
            prix: "25€",
            description: "Pantalon marron pour homme avec de la classe.",
            image: "pant_marron_h.png"
        },
        {
            id: 2,
            name: "Pantalon marron femme",
            prix: "22€",
            description: "Pantalon marron pour femme que toutes les femmes veulent.",
            image: "pant_marron_f.png"
        },
        {
            id: 3,
            name: "Pantalon rouge homme",
            prix: "27€",
            description: "Pantalon rouge pour homme trop rigolo.",
            image: "pant_rouge_h.png"
        },
        {
            id: 4,
            name: "Pantalon rouge femme",
            prix: "27€",
            description: "Pantalon rouge pour femme avec de la classe.",
            image: "pant_rouge_f.png"
        },
        {
            id: 5,
            name: "T-shirt noir homme",
            prix: "10€",
            description: "T-shirt noir pour homme beaucoup trop stylé.",
            image: "tshirt_noir_h.png"
        },
        {
            id: 6,
            name: "T-shirt noir femme",
            prix: "12€",
            description: "T-shirt noir pour femme qui va avec tous les vêtements.",
            image: "tshirt_noir_f.png"
        },
        {
            id: 7,
            name: "T-shirt rouge homme",
            prix: "14€",
            description: "T-shirt rouge pour homme que tous les hommes veulent.",
            image: "tshirt_rouge_h.png"
        },
        {
            id: 8,
            name: "T-shirt rouge femme",
            prix: "12€",
            description: "T-shirt rouge pour femme beaucoup trop stylé.",
            image: "tshirt_rouge_f.png"
        },
        {
            id: 9,
            name: "Pull jaune homme",
            prix: "23€",
            description: "Pull jaune pour homme en coton.",
            image: "pull_jaune_h.png"
        },
        {
            id: 10,
            name: "Pull jaune femme",
            prix: "24€",
            description: "Pull jaune pour femme en coton mais trop rigolo.",
            image: "pull_jaune_f.png"
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
