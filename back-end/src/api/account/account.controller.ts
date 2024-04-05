import { Body, Controller, Post } from '@nestjs/common';
import { AccountService } from './account.service';
import { LoginRequest } from 'src/models/account';

@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Post('login')
  login(@Body() login: LoginRequest) {
    return this.service.login(login);
  }
}
