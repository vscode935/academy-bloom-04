import DashboardCard from "@/components/DashboardCard";
import { BookOpen, ClipboardList, FlaskConical, Code } from "lucide-react";

const FacultyDashboard = () => (
  <div>
    <h1 className="text-2xl font-bold font-heading text-foreground mb-6">Faculty Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard title="Subjects" value={4} icon={BookOpen} color="primary" />
      <DashboardCard title="Assignments" value={12} icon={ClipboardList} color="info" />
      <DashboardCard title="MCQ Tests" value={6} icon={FlaskConical} color="warning" />
      <DashboardCard title="Coding Challenges" value={8} icon={Code} color="success" />
    </div>
  </div>
);

export default FacultyDashboard;
