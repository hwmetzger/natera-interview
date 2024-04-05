import { Injectable } from '@nestjs/common';
import { LoginRequest, LoginResponse } from 'src/models/account';

@Injectable()
export class AccountService {
  async login(request: LoginRequest): Promise<LoginResponse> {
    if (request.id === 1) return { group: 1 };
    return {
      group: 2,
    };
  }
}
