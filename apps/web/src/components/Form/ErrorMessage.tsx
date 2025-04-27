import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface Props {
    name: string;
}

export const ErrorMessage: FC<Props> = ({ name }) => {
    const { formState } = useFormContext();
    const { errors } = formState;

    const value = name.includes(".") ? name.split(".") : [name];

    const errorMessage = value.reduce((acc, key) => {
        return acc && acc[key];
    }, errors as any);

    return (
        <>
            {errorMessage?.message && (
                <div className="mt-2 text-sm text-red-600">
                    {String(errorMessage.message) ?? ""}
                </div>
            )}
        </>
    );
};
