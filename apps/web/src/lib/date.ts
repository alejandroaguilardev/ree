import dayjs from 'dayjs';
import 'dayjs/locale/es';

dayjs.locale('es');

export const parseDate = (date?: string, format = 'YYYY-MM-DD') => {
    return date ? dayjs(date).format(format) : '';
};
