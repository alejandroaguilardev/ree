import { EnergyBalanceExternal } from "./response/external.balance";

export interface EnergyBalanceRepository {
    upsert(records: EnergyBalanceExternal): Promise<void>;
}