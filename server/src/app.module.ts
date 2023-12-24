import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { CatsModule } from 'src/cats/cats.module';
import { logger } from 'src/middleware/logger.middleware';
import { UsersModule } from 'src/users/users.module';
import { AuthMiddleware } from 'src/middleware/auth.middleware';
import { UsersController } from 'src/users/users.controller';

@Module({
  imports: [CatsModule, UsersModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware, logger)
      .exclude({
        path: 'cats',
        method: RequestMethod.ALL,
      })
      .forRoutes(CatsController, UsersController);
  }
}
