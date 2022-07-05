import { Injectable } from '@nestjs/common';

interface UserEntity {
  id: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: UserEntity[] = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
    },
  ];

  findUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
