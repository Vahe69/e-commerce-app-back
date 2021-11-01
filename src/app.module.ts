import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import {ProduitsController} from "./produits/produits.controller";
import {ProduitsService} from "./produits/produits.service";

@Module({
  imports: [],
  controllers: [AppController, UsersController, ProduitsController],
  providers: [AppService, UsersService, ProduitsService],
})
export class AppModule {}
