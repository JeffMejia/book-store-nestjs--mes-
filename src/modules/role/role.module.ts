import { SharedModule } from './../../shared/shared.module';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleRepository } from './role.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([RoleRepository]), SharedModule],
  providers: [RoleService],
  controllers: [RoleController],
})
export class RoleModule {}
