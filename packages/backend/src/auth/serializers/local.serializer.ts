import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UsersService } from '../../users/users.service';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(private readonly usersService: UsersService) {
    super();
  }

  serializeUser(user: any, done: Function) {
    done(null, user.id);
  }

  deserializeUser(userId: string, done: Function) {
    const user = this.usersService.findUserById(Number(userId));
    if (user) {
      const { password, ...finalUser } = user;
      done(null, finalUser);
    }
  }
}
