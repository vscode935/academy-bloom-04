import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Line, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement, Title, Tooltip, Legend, Filler);

interface ChartComponentProps {
  type: "bar" | "line" | "doughnut";
  data: any;
  options?: any;
  title?: string;
}

const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "bottom" as const, labels: { padding: 20, usePointStyle: true } },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { color: "hsl(220, 13%, 91%)" }, beginAtZero: true },
  },
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: "bottom" as const, labels: { padding: 20, usePointStyle: true } },
  },
};

const ChartComponent = ({ type, data, options, title }: ChartComponentProps) => {
  const chartOptions = type === "doughnut" ? { ...doughnutOptions, ...options } : { ...defaultOptions, ...options };

  return (
    <div className="bg-card rounded-xl border border-border p-6">
      {title && <h3 className="text-base font-semibold font-heading text-foreground mb-4">{title}</h3>}
      <div className="h-[300px]">
        {type === "bar" && <Bar data={data} options={chartOptions} />}
        {type === "line" && <Line data={data} options={chartOptions} />}
        {type === "doughnut" && <Doughnut data={data} options={chartOptions} />}
      </div>
    </div>
  );
};

export default ChartComponent;
