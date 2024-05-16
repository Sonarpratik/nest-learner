import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExampleMiddleware).forRoutes('users')
    // consumer.apply(ExampleMiddleware).forRoutes(UsersController)
    consumer
      .apply(ExampleMiddleware)
      .forRoutes({
        path: 'users',
        method: RequestMethod.GET
      },
        {
          path: 'users/:id',
          method: RequestMethod.GET
        },
        {
          path: 'users/create',
          method: RequestMethod.POST
        },
      )
      .apply(AnotherMiddleware)
      .forRoutes(UsersController);
  }
}
