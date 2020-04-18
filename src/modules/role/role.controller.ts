import { RoleService } from './role.service';
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
import { Role } from './role.entity';

@Controller('roles')
export class RoleController {
  constructor(private readonly _roleService: RoleService) {}

  @Get(':id')
  async getRole(@Param() id: number): Promise<Role> {
    const role = await this._roleService.get(id); //la asignacion aca deberia ser role: Role = await blabla bla;
    return role;
  }

  @Get()
  async getRoles(): Promise<Role[]> {
    const roles = await this._roleService.getAll();
    console.log(roles);
    return roles;
  }

  @Post('create')
  async createRole(@Body() role: Role): Promise<Role> {
    const createRole = await this._roleService.create(role);
    return createRole;
  }

  @Patch(':id')
  async updateRole(@Param() id: number, @Body() role: Role) {
    const updatedRole = await this._roleService.update(id, role);
    return `Actualizado Correctamente!`;
  }

  @Delete(':id')
  async deleteRole(@Param() id: number) {
    await this._roleService.delete(id);
    return true;
  }
}
