import { Controller, useFormContext } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';

interface FormInputDateProps {
    name: string;
    label: string;
    value?: string;
}

export const RHFDate: React.FC<FormInputDateProps> = ({ name, label, value }) => {
    const { control } = useFormContext();

    return (
        <div className="w-full">
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <>
                        <input
                            type="date"
                            id={name}
                            name={name}
                            value={field.value || value}
                            onChange={(e) => field.onChange(e.target.value)}
                            ref={field.ref}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        <ErrorMessage name={name} />
                    </>
                )}
            />
        </div>
    );
};
