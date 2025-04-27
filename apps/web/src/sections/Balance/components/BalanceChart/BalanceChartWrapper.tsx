import { ApolloError, ApolloQueryResult } from "@apollo/client";
import { Balance } from "../../../../types/Balance";
import { BalanceChart } from "./BalanceChart";
import { BalanceArgs, FindEnergyBalanceByDateRange } from "../../types/EnergyBalanceByDateRange";

interface Props {
    data?: Balance
    isLoading: boolean;
    error?: ApolloError;
    refetch: (variables?: Partial<BalanceArgs> | undefined) => Promise<ApolloQueryResult<FindEnergyBalanceByDateRange>>
}

export const BalanceChartWrapper: React.FC<Props> = ({ data, error, isLoading, refetch }) => {

    if (isLoading) {
        return (
            <div className="space-y-4 p-6">
                <div className="w-full h-80 bg-gray-300 animate-pulse"></div>
                <div className="w-2/3 h-6 bg-gray-300 animate-pulse"></div>
                <div className="w-1/2 h-6 bg-gray-300 animate-pulse"></div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center p-6 space-y-4">
                <h2 className="text-xl text-red-600 font-semibold">¡Oops! Algo salió mal...</h2>
                <p className="text-gray-600 text-center">Parece que hubo un error al cargar la información. Por favor, inténtalo más tarde.</p>
                <button
                    onClick={() => refetch()}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Reintentar
                </button>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex flex-col items-center justify-center p-6 space-y-4">
                <h2 className="text-xl text-gray-600 font-semibold">No se encontraron datos</h2>
                <p className="text-gray-500 text-center">Parece que no hay información disponible para el rango seleccionado. Por favor, ajusta las fechas o intenta nuevamente más tarde.</p>
                <button
                    onClick={() => refetch()}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Reintentar
                </button>
            </div>
        );
    }

    return <BalanceChart data={data!} />
}
