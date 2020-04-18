import { UserService } from './user.service';
import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Body,
  Patch,
} from '@nestjs/common';
//import { getCustomRepository } from 'typeorm';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  async getUser(@Param() id: number): Promise<User> {
    const user = await this._userService.get(id); //la asignacion aca deberia ser user: User = await blabla bla;
    return user;
  }

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this._userService.getAll();
    console.log(users);
    return users;
  }

  @Post('create')
  async createUser(@Body() user: User): Promise<User> {
    const createUser = await this._userService.create(user);
    return createUser;
  }

  @Patch(':id')
  async updateUser(id: number, @Body() user: User) {
    const updatedUser = await this._userService.update(id, user);
    return `${updatedUser}`;
  }

  @Delete(':id')
  async deleteUser(@Param() id: number) {
    await this._userService.delete(id);
    return true;
  }
}
