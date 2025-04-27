import { Injectable } from '@nestjs/common';
import { MongoEnergyBalanceRepository } from '../infraestructura/repositories/mongo-energy-balance.repository';

@Injectable()
export class BalanceService {
    constructor(
        private readonly balanceRepository: MongoEnergyBalanceRepository,
    ) { }

    async findByDateRange(startDate: Date, endDate: Date) {
        return this.balanceRepository.findByStartAndEndDate(startDate, endDate);
    }
}
