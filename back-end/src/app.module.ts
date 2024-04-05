import { Module } from '@nestjs/common';
import { Modules } from './api';

@Module({
  imports: Modules.map((x) => x),
})
export class AppModule {}
