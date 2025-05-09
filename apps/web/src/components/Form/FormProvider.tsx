import { FormProvider as Form, UseFormReturn } from 'react-hook-form';

type Props = {
    children: React.ReactNode;
    methods: UseFormReturn<any>;
    onSubmit?: VoidFunction;
};

export function FormProvider({ children, onSubmit, methods }: Props) {
    return (
        <Form {...methods}>
            <form role="form" onSubmit={onSubmit}>{children}</form>
        </Form>
    );
}
