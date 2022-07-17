import {
  Controller,
  Post,
  UseGuards,
  Get,
  HttpCode,
  Req,
} from '@nestjs/common';

import { LogInWithCredentialsGuard } from '../auth/guards/logInWithCredentials.guard';

@Controller()
export class AppController {
  @HttpCode(200)
  @UseGuards(LogInWithCredentialsGuard)
  @Post('auth/login')
  login(@Req() req) {
    return req.user;
  }

  @HttpCode(200)
  @Get()
  async authenticate(@Req() req) {
    return req.user;
  }
}
