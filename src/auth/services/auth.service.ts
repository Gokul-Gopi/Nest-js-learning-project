import { Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findUserByUsername(username);
    return user;
  }
}
