import { Injectable } from '@nestjs/common';
import { MongoEnergyBalanceRepository } from '../infraestructura/repositories/mongo-energy-balance.repository';
import { ExternalBalanceApi } from '../infraestructura/external-balance.api';

@Injectable()
export class BalanceService {
    constructor(
        private readonly externalBalanceApi: ExternalBalanceApi,
        private readonly balanceRepository: MongoEnergyBalanceRepository,
    ) { }

    async findByDateRange(startDate: Date, endDate: Date) {
        const record = await this.balanceRepository.findByStartAndEndDate(startDate, endDate);
        if (!record) {
            await this.upsert(startDate, endDate);
        }
        return this.balanceRepository.findByStartAndEndDate(startDate, endDate);

    }

    async upsert(startDate: Date, endDate: Date) {
        const records = await this.externalBalanceApi.getBalanceByDateRange(
            startDate.toISOString().slice(0, 16),
            endDate.toISOString().slice(0, 16)
        );
        await this.balanceRepository.upsert(startDate, endDate, records);
    }
}
