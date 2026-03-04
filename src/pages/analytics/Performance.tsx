import ChartComponent from "@/components/ChartComponent";

const attendanceData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [{
    label: "Attendance %",
    data: [92, 88, 85, 90, 87, 91],
    backgroundColor: "hsla(160, 84%, 39%, 0.2)",
    borderColor: "hsl(160, 84%, 39%)",
    borderWidth: 2,
    fill: true,
    tension: 0.4,
  }],
};

const assignmentData = {
  labels: ["DS", "DBMS", "OS", "CN", "SE"],
  datasets: [{
    label: "Average Score",
    data: [78, 85, 72, 88, 80],
    backgroundColor: [
      "hsl(160, 84%, 39%)",
      "hsl(200, 80%, 50%)",
      "hsl(280, 65%, 60%)",
      "hsl(30, 90%, 55%)",
      "hsl(350, 70%, 55%)",
    ],
  }],
};

const codingData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
  datasets: [
    {
      label: "Easy",
      data: [5, 8, 12, 15, 18, 22],
      borderColor: "hsl(142, 71%, 45%)",
      backgroundColor: "hsla(142, 71%, 45%, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Medium",
      data: [2, 4, 6, 9, 11, 14],
      borderColor: "hsl(38, 92%, 50%)",
      backgroundColor: "hsla(38, 92%, 50%, 0.1)",
      fill: true,
      tension: 0.4,
    },
    {
      label: "Hard",
      data: [0, 1, 2, 3, 4, 5],
      borderColor: "hsl(0, 72%, 51%)",
      backgroundColor: "hsla(0, 72%, 51%, 0.1)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const Performance = () => (
  <div>
    <h1 className="text-2xl font-bold font-heading text-foreground mb-6">Performance Analytics</h1>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartComponent type="line" data={attendanceData} title="Attendance Trend" />
      <ChartComponent type="bar" data={assignmentData} title="Assignment Performance by Subject" />
      <div className="lg:col-span-2">
        <ChartComponent type="line" data={codingData} title="Coding Progress Over Time" />
      </div>
    </div>
  </div>
);

export default Performance;
