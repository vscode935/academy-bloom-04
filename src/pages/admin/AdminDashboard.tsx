import DashboardCard from "@/components/DashboardCard";
import { Building2, Users, GraduationCap, Shield } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-foreground mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard title="Total Departments" value={8} icon={Building2} trend="2 new this year" trendUp color="primary" />
        <DashboardCard title="Total Faculty" value={45} icon={Users} trend="+5 this semester" trendUp color="info" />
        <DashboardCard title="Total Students" value={1240} icon={GraduationCap} trend="+120 enrolled" trendUp color="success" />
        <DashboardCard title="System Users" value={1293} icon={Shield} color="warning" />
      </div>
    </div>
  );
};

export default AdminDashboard;
