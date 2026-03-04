import DashboardCard from "@/components/DashboardCard";
import { GraduationCap, Users, BookOpen } from "lucide-react";

const HodDashboard = () => (
  <div>
    <h1 className="text-2xl font-bold font-heading text-foreground mb-6">HOD Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <DashboardCard title="Classes" value={6} icon={GraduationCap} color="primary" />
      <DashboardCard title="Faculty" value={12} icon={Users} color="info" />
      <DashboardCard title="Subjects" value={18} icon={BookOpen} color="success" />
    </div>
  </div>
);

export default HodDashboard;
