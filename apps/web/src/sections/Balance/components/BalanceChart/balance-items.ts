import { LineChartItemsDataSets } from "../../../../components/Chart/LineChartComponent";
import { Included } from "../../../../types/Balance";

interface Props {
    renewableData?: Included,
    nonRenewableData?: Included,
    storageData?: Included,
    demandData?: Included
}

export const processLabels = ({ demandData, nonRenewableData, renewableData, storageData }: Props) => {
    const allDates = [
        ...extractDates(renewableData),
        ...extractDates(nonRenewableData),
        ...extractDates(storageData),
        ...extractDates(demandData),
    ];

    const uniqueLabels = [...new Set(allDates)];
    return uniqueLabels;
}

export const processData = (label: string, borderColor: string, included?: Included): LineChartItemsDataSets[] => {
    if (!included) {
        return [];
    }
    const data = included.attributes.content[0].attributes.values.map(value => value.value);

    return [{
        label,
        data,
        borderColor,
        fill: false,
    }]
}

const extractDates = (dataItem: any) => {
    return dataItem?.attributes?.content[0]?.attributes?.values.map((value: any) => new Date(value.datetime).toLocaleDateString()) || [];
};
