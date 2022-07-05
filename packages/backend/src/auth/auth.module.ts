import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { LocalSerializer } from './serializers/local.serializer';
import { PassportSessionModule } from '../passport-session/passport-session.module';

@Module({
  imports: [UsersModule, PassportSessionModule.register()],
  providers: [AuthService, LocalStrategy, LocalSerializer],
})
export class AuthModule {}
