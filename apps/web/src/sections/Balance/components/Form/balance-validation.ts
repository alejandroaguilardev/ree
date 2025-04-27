import * as Yup from 'yup';
import { subtractToDate } from '../../../../lib/date';

export interface BalanceFormFilterInput {
    startDate: Date,
    endDate: Date,
}

const today = new Date();
const balanceDefaultValues: BalanceFormFilterInput = {
    startDate: new Date(subtractToDate(today)),
    endDate: new Date(subtractToDate(today)),
};

const balanceFilterSchema: Yup.ObjectSchema<BalanceFormFilterInput> = Yup.object().shape({
    startDate: Yup.date().required('La fecha inicial'),
    endDate: Yup.date().required('La fecha final'),

});

export { balanceDefaultValues, balanceFilterSchema };