import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ExternalBalanceApi } from '../infraestructura/external-balance.api';
import { MongoEnergyBalanceRepository } from '../infraestructura/repositories/mongo-energy-balance.repository';

@Injectable()
export class BalanceScheduleService {
    constructor(
        private readonly externalBalanceApi: ExternalBalanceApi,
        private readonly balanceRepository: MongoEnergyBalanceRepository,
    ) { }

    @Cron('0 * * * *')
    async fetchBalanceData() {
        const startDate = '2025-04-25T00:00';
        const endDate = '2025-04-25T23:59';
        const records = await this.externalBalanceApi.getBalanceByDateRange(startDate, endDate);
        await this.balanceRepository.upsert(records);
    }
}
