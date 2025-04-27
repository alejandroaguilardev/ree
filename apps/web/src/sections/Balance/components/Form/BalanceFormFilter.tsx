"use client"

import type React from "react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button, FormProvider, InputDate } from "../../../../components"
import { type BalanceFormFilterInput, balanceFilterSchema } from "./balance-validation"
import { useBalanceFilterForm } from "../../hooks/useBalanceFilterForm"
import type { BalanceArgs } from "../../types/EnergyBalanceByDateRange"
import Typography from "../../../../components/UI/Typography/Typography"

interface Props {
    callback: (args: BalanceArgs) => void
    defaultValues: BalanceFormFilterInput
}

export const BalanceFormFilter: React.FC<Props> = ({ defaultValues, callback }) => {
    const methods = useForm({
        resolver: yupResolver(balanceFilterSchema),
        defaultValues: defaultValues,
    })
    const { onSubmit } = useBalanceFilterForm({ callback })

    return (
        <div className="bg-white rounded-lg   p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
                <Typography variant="h3">Filtrar por rango de fechas</Typography>
            </div>

            <FormProvider methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-row gap-4">
                    <div className="space-y-2 w-full">
                        <InputDate
                            name="startDate"
                            label="Fecha Inicial"
                        />
                    </div>

                    <div className="space-y-2 w-full">
                        <InputDate
                            name="endDate"
                            label="Fecha Final"
                        />
                    </div>

                    <div className="flex items-end w-full">
                        <Button type="submit" size="default" variant="default" className="w-full">
                            Aplicar Filtros
                        </Button>
                    </div>
                </div>
            </FormProvider>
        </div>
    )
}
