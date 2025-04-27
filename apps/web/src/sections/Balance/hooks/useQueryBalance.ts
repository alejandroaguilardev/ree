import { useQuery } from '@apollo/client';
import { GET_BALANCE_ELÉCTRICO } from '../../../graphql/queries';
import { BalanceArgs, FindEnergyBalanceByDateRange } from '../types/EnergyBalanceByDateRange';

interface Props {
    startDate: string,
    endDate: string
}

export const useGetEnergyBalanceByDateRange = ({
    startDate,
    endDate
}: Props) => {
    const { data, loading, error, refetch } = useQuery<FindEnergyBalanceByDateRange, BalanceArgs>(
        GET_BALANCE_ELÉCTRICO,
        {
            variables: { startDate, endDate },
            notifyOnNetworkStatusChange: true,
        }
    );

    return {
        data: data?.getEnergyBalanceByDateRange,
        loading,
        error,
        refetch
    }
}
