import { BalanceChart } from '../components/BalanceChart/BalanceChart';
import { BalanceFormFilter } from '../components/Form/BalanceFormFilter';
import { balanceDefaultValues } from '../components/Form/balance-validation';
import { useGetEnergyBalanceByDateRange } from '../hooks/useQueryBalance';
import { BalanceArgs } from '../types/EnergyBalanceByDateRange';

export const BalanceView: React.FC = () => {
    const { data, loading, error, refetch } = useGetEnergyBalanceByDateRange({
        startDate: balanceDefaultValues.startDate.toISOString(),
        endDate: balanceDefaultValues.endDate.toISOString(),
    });

    return (
        <>
            {JSON.stringify(data)}
            <BalanceFormFilter defaultValues={balanceDefaultValues} callback={(data: BalanceArgs) => refetch({ ...data })} />
            <BalanceChart />
        </>
    )

};
