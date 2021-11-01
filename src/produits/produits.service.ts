import { Injectable } from '@nestjs/common';

@Injectable()
export class ProduitsService {
    private produit = [
        {
            id: 1,
            name : "Chemise",
            comment : "",
            rating: "",
        }
    ]
}
