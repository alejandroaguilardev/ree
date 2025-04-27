import { parseDate } from "../../../lib/date";
import { BalanceFormFilterInput } from "../components/Form/balance-validation";
import { BalanceArgs } from "../types/EnergyBalanceByDateRange";

interface Props {
    callback: (args: BalanceArgs) => void
}

export const useBalanceFilterForm = ({ callback }: Props) => {

    const onSubmit = (data: BalanceFormFilterInput) => {
        const { startDate, endDate } = data;
        const args: BalanceArgs = {
            startDate: parseDate(startDate.toISOString()),
            endDate: parseDate(endDate.toISOString()),
        };

        return callback(args)
    };

    return {
        onSubmit
    };
};
