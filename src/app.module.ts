import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import {ProduitsController} from "./produits/produits.controller";
import {ProduitsService} from "./produits/produits.service";
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import * as dotenv from 'dotenv';
import { JwtStrategy } from './users/strategy/passport-jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

dotenv.config();
@Module({
  imports: [
    PassportModule.register({
      defaultStrategy : "jwt"
    }),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
          expiresIn: '2h'
      }
  })
  ],
  controllers: [AppController, UsersController, ProduitsController, OrderController],
  providers: [AppService, UsersService, ProduitsService, JwtStrategy, ConfigService, OrderService],
})
export class AppModule {}
