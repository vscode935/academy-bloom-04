import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutDashboard, Users, Building2, BookOpen, GraduationCap,
  ClipboardList, FileText, Code, Trophy, BarChart3, ChevronLeft,
  ChevronRight, LogOut, Calendar, FileUp, FlaskConical
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
  role: string;
}

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

const roleMenus: Record<string, NavItem[]> = {
  admin: [
    { label: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Departments", path: "/admin/departments", icon: <Building2 size={20} /> },
    { label: "Users", path: "/admin/users", icon: <Users size={20} /> },
  ],
  hod: [
    { label: "Dashboard", path: "/hod/dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Classes", path: "/hod/classes", icon: <GraduationCap size={20} /> },
    { label: "Subjects", path: "/hod/subjects", icon: <BookOpen size={20} /> },
  ],
  faculty: [
    { label: "Dashboard", path: "/faculty/dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Attendance", path: "/faculty/attendance", icon: <Calendar size={20} /> },
    { label: "Assignments", path: "/faculty/assignments", icon: <ClipboardList size={20} /> },
    { label: "Materials", path: "/faculty/materials", icon: <FileUp size={20} /> },
    { label: "MCQ Tests", path: "/faculty/tests", icon: <FlaskConical size={20} /> },
    { label: "Coding Problems", path: "/faculty/coding-problems", icon: <Code size={20} /> },
  ],
  student: [
    { label: "Dashboard", path: "/student/dashboard", icon: <LayoutDashboard size={20} /> },
    { label: "Attendance", path: "/student/attendance", icon: <Calendar size={20} /> },
    { label: "Assignments", path: "/student/assignments", icon: <ClipboardList size={20} /> },
    { label: "Materials", path: "/student/materials", icon: <FileText size={20} /> },
    { label: "MCQ Tests", path: "/student/mcq-test", icon: <FlaskConical size={20} /> },
    { label: "Coding Practice", path: "/student/coding", icon: <Code size={20} /> },
    { label: "Leaderboard", path: "/student/leaderboard", icon: <Trophy size={20} /> },
  ],
};

const Sidebar = ({ collapsed, onToggle, role }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const items = roleMenus[role] || [];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-sidebar-bg flex flex-col z-40 sidebar-transition ${
        collapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center px-5 border-b border-sidebar-hover">
        <GraduationCap size={28} className="text-sidebar-active flex-shrink-0" />
        {!collapsed && (
          <span className="ml-3 text-lg font-bold font-heading text-primary-foreground tracking-tight">
            IAMS
          </span>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        {items.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-sidebar-active/15 text-sidebar-active"
                  : "text-sidebar-fg hover:bg-sidebar-hover hover:text-primary-foreground"
              }`}
              title={collapsed ? item.label : undefined}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}

        {/* Analytics link for all */}
        <button
          onClick={() => navigate("/analytics")}
          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
            location.pathname === "/analytics"
              ? "bg-sidebar-active/15 text-sidebar-active"
              : "text-sidebar-fg hover:bg-sidebar-hover hover:text-primary-foreground"
          }`}
          title={collapsed ? "Analytics" : undefined}
        >
          <BarChart3 size={20} />
          {!collapsed && <span>Analytics</span>}
        </button>
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 space-y-1">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-fg hover:bg-destructive/20 hover:text-destructive transition-colors"
          title={collapsed ? "Logout" : undefined}
        >
          <LogOut size={20} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shadow-sm"
      >
        {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>
    </aside>
  );
};

export default Sidebar;
