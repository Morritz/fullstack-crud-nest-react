import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  authenticateUser(username: string, password: string) {
    const user = this.usersService.findUserByUsername(username);
    if (!user) return null;
    if (user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
