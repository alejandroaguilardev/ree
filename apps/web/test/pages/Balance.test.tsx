import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BalancePage from '../../src/pages/Balance';

vi.mock('../../src/sections/Balance/hooks/useQueryBalance', () => ({
    useGetEnergyBalanceByDateRange: vi.fn().mockReturnValue({
        data: undefined,
        loading: false,
        error: undefined,
        refetch: vi.fn()
    }),
}));

describe('BalancePage Snapshot', () => {
    it('should match the snapshot', () => {


        const { asFragment } = render(<BalancePage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
