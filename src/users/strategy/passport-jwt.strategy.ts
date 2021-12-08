import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users.service';
import { Users } from '../users.entity';
import { PayloadInterface } from '../interface/payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
      private configService: ConfigService,
      private userService: UsersService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('SECRET'),
    });
  }

  // Cette fonction va permettre de vérifier si le user exist en récupérant le payload dans le token envoyer au moment de la connexion.
  async validate(payload: PayloadInterface) {
    const users = this.userService.users;
    const user = await users.find((user: Users) => {
      return user.mail === payload.mail 
    });
    if(user){
      const result = {
        ...user
      }
      delete result.motdepasse;
      delete result.salt;
      return result;
    }else{
      throw new UnauthorizedException();
    }
  }
}