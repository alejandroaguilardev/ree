import { create } from "zustand";
import { Balance } from "../types/Balance";


interface BalanceStore {
    balance: Balance | null;
    setBalance: (balance: Balance | null) => void;
}

export const useBalanceStore = create<BalanceStore>((set) => ({
    balance: null,
    setBalance: (balance) => set({ balance }),
}));