import { UserDto } from './dto/user.dto';
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
import { getCustomRepository } from 'typeorm';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get(':id')
  async getUser(@Param() id: number): Promise<UserDto> {
    const user = await this._userService.get(id); //la asignacion aca deberia ser user: User = await blabla bla;
    return user;
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    const users = await this._userService.getAll();
    return users;
  }

  @Post()
  async createUser(@Body() user: User): Promise<UserDto> {
    const createUser = await this.createUser(user);
    return createUser;
  }

  @Patch(':id')
  async updateUser(id: number, @Body() user: User): Promise<UserDto> {
    const createUser = await this.createUser(user);
    return createUser;
  }

  @Delete(':id')
  async deleteUser(@Param() id: number) {
    await this._userService.delete(id);
    return true;
  }
}
