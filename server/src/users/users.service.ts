import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    { name: 'Ruined', username: 'Sunchhay', password: 'password', age: 10 },
  ];

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async createUser(user: User) {
    return this.users.push(user);
  }
}
