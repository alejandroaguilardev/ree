import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { BalanceService } from './balance.service';

@Injectable()
export class BalanceScheduleService {
  constructor(private readonly balanceService: BalanceService) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async fetchBalanceData() {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(endDate.getDate() - 1);
    return this.balanceService.upsert(startDate, endDate);
  }
}
