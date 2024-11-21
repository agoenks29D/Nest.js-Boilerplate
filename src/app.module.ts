import {
  Logger,
  MiddlewareConsumer,
  Module,
  NestModule,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';
import { Test, TestSchema } from './core/database/test.schema';
import { AppController } from './app.controller';
import { AppMiddleware } from './app.middleware';
import { AppService } from './app.service';
import { AppConfig } from './app.type';

@Module({
  imports: [
    CoreModule,
    MongooseModule.forFeature([
      {
        name: Test.name,
        schema: TestSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [Logger, AppService],
})
export class AppModule implements NestModule, OnApplicationBootstrap {
  constructor(
    private logger: Logger,
    private configService: ConfigService,
  ) {}

  /**
   * Apply middleware
   */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppMiddleware).forRoutes('*');
  }

  onApplicationBootstrap() {
    const environment = this.configService.get<AppConfig>('environment');
    /**
     * Logging
     */
    this.logger.log(`Environment: ${environment}`, AppModule.name);
    this.logger.log(
      `HTTPS enabled: ${this.configService.get('ENABLE_HTTPS')}`,
      AppModule.name,
    );
    this.logger.log(
      `System timezone: ${this.configService.get('TZ')}`,
      AppModule.name,
    );
  }
}
