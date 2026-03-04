import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Login from "@/pages/auth/Login";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import Departments from "@/pages/admin/Departments";
import Users from "@/pages/admin/Users";
import HodDashboard from "@/pages/hod/HodDashboard";
import Classes from "@/pages/hod/Classes";
import Subjects from "@/pages/hod/Subjects";
import FacultyDashboard from "@/pages/faculty/FacultyDashboard";
import Attendance from "@/pages/faculty/Attendance";
import Assignments from "@/pages/faculty/Assignments";
import Materials from "@/pages/faculty/Materials";
import Tests from "@/pages/faculty/Tests";
import CodingProblems from "@/pages/faculty/CodingProblems";
import StudentDashboard from "@/pages/student/StudentDashboard";
import AttendanceView from "@/pages/student/AttendanceView";
import AssignmentsView from "@/pages/student/AssignmentsView";
import MaterialsView from "@/pages/student/MaterialsView";
import MCQTest from "@/pages/student/MCQTest";
import CodingPractice from "@/pages/student/CodingPractice";
import Leaderboard from "@/pages/student/Leaderboard";
import Performance from "@/pages/analytics/Performance";

const ProtectedRoute = ({ children, allowedRole }: { children: React.ReactNode; allowedRole: string }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  if (!token) return <Navigate to="/login" replace />;
  if (role !== allowedRole) return <Navigate to={`/${role}/dashboard`} replace />;
  return <>{children}</>;
};

const AppRouter = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Navigate to="/login" replace />} />

    {/* Admin */}
    <Route path="/admin" element={<ProtectedRoute allowedRole="admin"><DashboardLayout role="admin" /></ProtectedRoute>}>
      <Route path="dashboard" element={<AdminDashboard />} />
      <Route path="departments" element={<Departments />} />
      <Route path="users" element={<Users />} />
    </Route>

    {/* HOD */}
    <Route path="/hod" element={<ProtectedRoute allowedRole="hod"><DashboardLayout role="hod" /></ProtectedRoute>}>
      <Route path="dashboard" element={<HodDashboard />} />
      <Route path="classes" element={<Classes />} />
      <Route path="subjects" element={<Subjects />} />
    </Route>

    {/* Faculty */}
    <Route path="/faculty" element={<ProtectedRoute allowedRole="faculty"><DashboardLayout role="faculty" /></ProtectedRoute>}>
      <Route path="dashboard" element={<FacultyDashboard />} />
      <Route path="attendance" element={<Attendance />} />
      <Route path="assignments" element={<Assignments />} />
      <Route path="materials" element={<Materials />} />
      <Route path="tests" element={<Tests />} />
      <Route path="coding-problems" element={<CodingProblems />} />
    </Route>

    {/* Student */}
    <Route path="/student" element={<ProtectedRoute allowedRole="student"><DashboardLayout role="student" /></ProtectedRoute>}>
      <Route path="dashboard" element={<StudentDashboard />} />
      <Route path="attendance" element={<AttendanceView />} />
      <Route path="assignments" element={<AssignmentsView />} />
      <Route path="materials" element={<MaterialsView />} />
      <Route path="mcq-test" element={<MCQTest />} />
      <Route path="coding" element={<CodingPractice />} />
      <Route path="leaderboard" element={<Leaderboard />} />
    </Route>

    {/* Analytics - accessible by all roles */}
    <Route path="/analytics" element={
      <DashboardLayout role={localStorage.getItem("role") || "student"} />
    }>
      <Route index element={<Performance />} />
    </Route>

    <Route path="*" element={<Navigate to="/login" replace />} />
  </Routes>
);

export default AppRouter;
