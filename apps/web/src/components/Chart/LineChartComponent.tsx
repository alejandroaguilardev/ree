import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export interface LineChartItemsDataSets {
    label: string;
    data: number[];
    borderColor: string;
    fill: boolean;
}

export interface LineChartItems {
    labels: string[];
    datasets: LineChartItemsDataSets[];
}

interface Props {
    items: LineChartItems;
}

const LineChartComponent: React.FC<Props> = ({ items }) => {

    return <Line data={items} />;
};

export default LineChartComponent