import React, { useEffect, useState } from 'react';
import { Balance } from "../../../../types/Balance";
import LineChartComponent, { LineChartItems } from '../../../../components/Chart/LineChartComponent';
import { processData, processLabels } from './balance-items';

interface Props {
    data: Balance;
}

export const BalanceChart: React.FC<Props> = ({ data }) => {
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    } as LineChartItems);

    useEffect(() => {

        const renewableData = data?.data?.included?.find(item => item.type === 'Renovable');
        const nonRenewableData = data?.data?.included?.find(item => item.type === 'No-Renovable');
        const storageData = data?.data?.included?.find(item => item.type === 'Almacenamiento');
        const demandData = data?.data?.included?.find(item => item.type === 'Demanda');

        const items = {
            labels: processLabels({ renewableData, nonRenewableData, storageData, demandData }),
            datasets: [
                ...processData('Energía Renovable', 'rgba(75, 192, 192, 1)', renewableData),
                ...processData('Energía No Renovable', 'rgba(255, 99, 132, 1)', nonRenewableData),
                ...processData('Energía de Almacenamiento', 'rgba(153, 102, 255, 1)', storageData),
                ...processData('Demanda de Energía', 'rgba(255, 159, 64, 1)', demandData),

            ],
        } as LineChartItems;
        setChartData(items);
    }, [data]);


    return <LineChartComponent items={chartData} />;
};
