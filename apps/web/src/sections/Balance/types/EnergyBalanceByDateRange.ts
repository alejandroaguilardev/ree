import { Balance } from "../../../types/Balance";

export interface FindEnergyBalanceByDateRange {
    getEnergyBalanceByDateRange: Balance
}

export interface BalanceArgs {
    startDate: string;
    endDate: string;
}
