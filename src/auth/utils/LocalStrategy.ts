/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super();
  }

  async validate(username: string, password: string) {
    console.log('inside local strategy');
    return this.authService.validateUser(username, password);
  }
}
