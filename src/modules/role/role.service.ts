import { RoleRepository } from './role.repository';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection } from 'typeorm';
import { Role } from '../role/role.entity';
import { RoleType } from './roletype.enum';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
  ) {}

  async get(id: number): Promise<Role> {
    if (!id) {
      throw new BadRequestException('ID Must Be SENT!!');
    }

    const role = await this._roleRepository.findOne(id, {
      where: { statys: 'ACTIVE' },
    });

    if (!role) {
      throw new NotFoundException();
    }
    return role;
  }

  async getAll(): Promise<Role[]> {
    const roles: Role[] = await this._roleRepository.find({
      where: { status: 'ACTIVE' },
    });

    return roles;
  }

  async create(role: Role): Promise<Role> {
    const savedRole: Role = await this._roleRepository.save(role);
    return savedRole;
  }

  async update(id: number, role: Role): Promise<void> {
    await this._roleRepository.update(id, role);
  }

  async delete(id: number): Promise<void> {
    const RoleExists = await this._roleRepository.findOne(id, {
      where: { status: RoleType.STATUSON },
    });
    if (!RoleExists) {
      throw new NotFoundException();
    }
    await this._roleRepository.update(id, { status: RoleType.STATUSOFF });
  }
}
