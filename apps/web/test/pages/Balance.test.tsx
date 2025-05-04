import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from "vitest";
import BalancePage from '../../src/pages/Balance';
import { BalanceFormFilterInput } from '../../src/sections/Balance/components/Form/balance-validation';

vi.mock('../../src/sections/Balance/hooks/useQueryBalance', () => ({
    useGetEnergyBalanceByDateRange: vi.fn().mockReturnValue({
        data: undefined,
        loading: false,
        error: undefined,
        refetch: vi.fn()
    }),
}));

vi.mock('../../src/sections/Balance/components/Form/balance-validation.ts', () => ({
    balanceDefaultValues: {
        startDate: new Date("2025-05-04"),
        endDate: new Date("2025-05-04"),
    } as BalanceFormFilterInput,
    balanceFilterSchema: vi.fn()
}));

describe('BalancePage Snapshot', () => {
    it('should match the snapshot', () => {


        const { asFragment } = render(<BalancePage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
