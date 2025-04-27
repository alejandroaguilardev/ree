import dayjs, { ManipulateType } from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export const parseDate = (date?: string, format = 'YYYY-MM-DD') => {
    return date ? dayjs(date).format(format) : '';
};
export const subtractToDate = (date?: Date, value = 1, type = 'day' as ManipulateType, format = 'YYYY-MM-DD') => {
    return date ? dayjs(date).subtract(value, type).format(format) : '';
};
