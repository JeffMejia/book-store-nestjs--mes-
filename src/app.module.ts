import { RoleController } from './modules/role/role.controller';
import { RoleModule } from './modules/role/role.module';
import { ConfigService } from './config/config.service';
import { Module, Controller } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, RoleModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
