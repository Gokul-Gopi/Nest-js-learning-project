import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  validateUser(username: string, email: string) {
    console.log('auth service line 11');
    const user = this.userService.findUserByUsername(username);
    console.log(user);
  }
}
