import { EnergyBalanceExternal } from './response/external.balance';

export interface EnergyBalanceRepository {
  upsert(
    startDate: Date,
    endDate: Date,
    records: EnergyBalanceExternal,
  ): Promise<void>;
  findByStartAndEndDate<T>(
    startDate: Date,
    endDate: Date,
    records: EnergyBalanceExternal,
  ): Promise<T>;
}
