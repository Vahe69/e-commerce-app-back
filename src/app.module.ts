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
  controllers: [AppController, UsersController, ProduitsController],
  providers: [AppService, UsersService, ProduitsService, JwtStrategy, ConfigService],
})
export class AppModule {}
