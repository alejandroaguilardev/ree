import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import { parseDate } from '../../lib/date';

interface FormInputDateProps {
    name: string;
    label: string;
    value?: string;
}

export const InputDate: React.FC<FormInputDateProps> = ({ name, label, value }) => {
    const { control } = useFormContext();

    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>

            <Controller
                name={name}
                control={control}
                render={({ field }) => {

                    return (
                        <>
                            <input
                                type="date"
                                id={name}
                                {...field}
                                value={field.value ? parseDate(field.value) : parseDate(value)}
                                onChange={(e) => field.onChange(parseDate(e.target.value))}
                                className="w-full mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <ErrorMessage name={name} />
                        </>
                    );
                }}
            />
        </div>
    );
};
