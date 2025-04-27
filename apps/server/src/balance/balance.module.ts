import { Module } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { BalanceResolver } from './balance.resolver';

@Module({
  providers: [BalanceResolver, BalanceService],
})
export class BalanceModule {}
