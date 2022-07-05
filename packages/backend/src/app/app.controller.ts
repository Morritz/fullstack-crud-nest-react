import {
  Controller,
  Request,
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
  login(@Request() req) {
    console.log(req.isAuthenticated());
    return req.user;
  }

  @HttpCode(200)
  @Get()
  async authenticate(@Req() request) {
    console.log(request.user);
    return request.user;
  }
}
