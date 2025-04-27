import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BalanceFormFilter } from '../../../../../src/sections/Balance/components/Form/BalanceFormFilter';
import { balanceDefaultValues } from '../../../../../src/sections/Balance/components/Form/balance-validation';

describe('BalanceFormFilter', () => {
    it('Show values', async () => {
        const callback = vi.fn();

        render(
            <BalanceFormFilter
                defaultValues={balanceDefaultValues}
                callback={callback}
            />
        );

        const fmt = (d: Date) => d.toISOString().split('T')[0];
        const startInput = screen.getByLabelText(/Fecha Inicial/i) as HTMLInputElement;
        const endInput = screen.getByLabelText(/Fecha Final/i) as HTMLInputElement;
        expect(startInput.value).toBe(fmt(balanceDefaultValues.startDate));
        expect(endInput.value).toBe(fmt(balanceDefaultValues.endDate));
    });
});
