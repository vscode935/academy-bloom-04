import DashboardCard from "@/components/DashboardCard";
import { Calendar, ClipboardList, Code, Trophy } from "lucide-react";

const StudentDashboard = () => (
  <div>
    <h1 className="text-2xl font-bold font-heading text-foreground mb-6">Student Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard title="Attendance" value="87%" icon={Calendar} trend="Above average" trendUp color="success" />
      <DashboardCard title="Assignments Due" value={3} icon={ClipboardList} color="warning" />
      <DashboardCard title="Coding Score" value={1450} icon={Code} trend="+120 this week" trendUp color="info" />
      <DashboardCard title="Leaderboard Rank" value="#12" icon={Trophy} color="primary" />
    </div>
  </div>
);

export default StudentDashboard;
