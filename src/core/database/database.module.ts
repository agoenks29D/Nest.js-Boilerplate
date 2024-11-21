import { Logger, Module, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AllConfigType } from '@/app.type';
import databaseConfig from './database.config';

@Module({
  imports: [
    ConfigModule.forFeature(databaseConfig),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService<AllConfigType>) => {
        const config = configService.get<MongooseModuleOptions>('database');
        return config;
      },
    }),
  ],
  providers: [Logger],
})
export class DatabaseModule implements OnApplicationBootstrap {
  constructor(private logger: Logger) {}
  onApplicationBootstrap() {
    this.logger.log('Dialect: mongo', DatabaseModule.name);
  }
}
