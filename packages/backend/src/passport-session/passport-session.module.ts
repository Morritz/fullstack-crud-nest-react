import {
  DynamicModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import * as passport from 'passport';

const DEFAULT_ROUTES = [{ path: '*', method: RequestMethod.ALL }];

export class PassportSessionModule {
  static register(): DynamicModule {
    return {
      module: PassportSessionModule,
    };
  }
  configure(consumer: MiddlewareConsumer) {
    console.log('init');
    const middlewares = [passport.initialize(), passport.session()];
    consumer.apply(...middlewares).forRoutes(...DEFAULT_ROUTES);
  }
}
