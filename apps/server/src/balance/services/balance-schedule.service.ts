import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ExternalBalanceApi } from '../infraestructura/external-balance.api';
import { MongoEnergyBalanceRepository } from '../infraestructura/repositories/mongo-energy-balance.repository';

@Injectable()
export class BalanceScheduleService {

    constructor(
        private readonly externalBalanceApi: ExternalBalanceApi,
        private readonly balanceRepository: MongoEnergyBalanceRepository,
    ) { }

    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    async fetchBalanceData() {
        const endDate = new Date();
        const startDate = new Date(endDate);
        startDate.setDate(endDate.getDate() - 1);
        return this.upsert(startDate, endDate);
    }

    private async upsert(startDate: Date, endDate: Date) {
        const records = await this.externalBalanceApi.getBalanceByDateRange(
            startDate.toISOString().slice(0, 16),
            endDate.toISOString().slice(0, 16)
        );
        await this.balanceRepository.upsert(startDate, endDate, records);
    }
}
