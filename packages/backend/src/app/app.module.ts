import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionModule } from 'nestjs-session';

@Module({
  imports: [
    SessionModule.forRoot({
      session: {
        resave: false,
        saveUninitialized: false,
        secret: 'SecretKey',
        cookie: {
          httpOnly: false,
          maxAge: 60000,
        },
      },
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
