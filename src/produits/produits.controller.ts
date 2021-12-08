import { Controller, Get, UseGuards } from '@nestjs/common';
import { User } from 'src/decorators/user.decorator';
import { JwtAuthGuard } from 'src/users/guards/jwt-auth.guard';
import { Produit } from './produits.interface';
import { ProduitsService } from './produits.service';

@Controller('products')
export class ProduitsController {
    constructor(private produitService : ProduitsService) {}

    @Get()
    getProduits() : Produit[] {
        return this.produitService.getProduits();
    }
}
