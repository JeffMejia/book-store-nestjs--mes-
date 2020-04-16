import { Configuration } from './../config/config.keys';
import { ConfigService } from './../config/config.service';
import { ConfigModule } from './../config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        ssl: true,
        type: 'mysql' as 'mysql',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.USERNAME),
        port: 3306,
        database: config.get(Configuration.DATABASE),
        password: config.get(Configuration.PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migration/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
