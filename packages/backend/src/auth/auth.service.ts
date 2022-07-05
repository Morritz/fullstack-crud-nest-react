import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  authenticateUser(username: string, password: string) {
    const user = this.usersService.findUserByUsername(username);
    if (!user) return false;
    if (user.password === password) return true;
    return false;
  }
}
