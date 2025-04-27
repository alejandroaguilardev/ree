import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BALANCE_ELÉCTRICO } from '../../../graphql/queries';

interface BalanceElectrico {
    startDate: string;
}

interface BalanceElectricoData {
    getEnergyBalanceByDateRange: BalanceElectrico[];
}

interface BalanceElectricoVariables {
    startDate: string;
    endDate: string;
}

export const BalanceView: React.FC = () => {
    const [startDate, setStartDate] = useState<string>('2022-01-01');
    const [endDate, setEndDate] = useState<string>('2022-01-31');

    const { data, loading, error, refetch } = useQuery<BalanceElectricoData, BalanceElectricoVariables>(
        GET_BALANCE_ELÉCTRICO,
        {
            variables: { startDate, endDate },
            notifyOnNetworkStatusChange: true,
        }
    );

    return <>{loading}</>

};
