import { RoleRepository } from './../role/role.repository';
import { AuthModule } from './../auth/auth.module';
import { SharedModule } from './../../shared/shared.module';
import { UserRepository } from './user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, RoleRepository]),
    SharedModule,
    AuthModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
