import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auth
export const loginUser = (data: { email: string; password: string }) =>
  api.post("/auth/login", data);

// Admin
export const getDepartments = () => api.get("/departments");
export const createDepartment = (data: any) => api.post("/departments", data);
export const deleteDepartment = (id: string) => api.delete(`/departments/${id}`);
export const getUsers = () => api.get("/users");

// HOD
export const getClasses = () => api.get("/classes");
export const createClass = (data: any) => api.post("/classes", data);
export const getSubjects = () => api.get("/subjects");
export const createSubject = (data: any) => api.post("/subjects", data);

// Faculty
export const getAttendance = (classId: string) => api.get(`/attendance/${classId}`);
export const markAttendance = (data: any) => api.post("/attendance", data);
export const getAssignments = () => api.get("/assignments");
export const createAssignment = (data: any) => api.post("/assignments", data);
export const getMaterials = () => api.get("/materials");
export const uploadMaterial = (data: FormData) => api.post("/materials", data);
export const getTests = () => api.get("/tests");
export const createTest = (data: any) => api.post("/tests", data);
export const getCodingProblems = () => api.get("/coding-problems");
export const createCodingProblem = (data: any) => api.post("/coding-problems", data);

// Student
export const getStudentAttendance = () => api.get("/student/attendance");
export const getStudentAssignments = () => api.get("/student/assignments");
export const submitAssignment = (data: FormData) => api.post("/student/assignments/submit", data);
export const getStudentMaterials = () => api.get("/student/materials");
export const getMCQTest = (testId: string) => api.get(`/student/tests/${testId}`);
export const submitMCQTest = (data: any) => api.post("/student/tests/submit", data);
export const runCode = (data: any) => api.post("/coding/run", data);
export const submitCode = (data: any) => api.post("/coding/submit", data);
export const getLeaderboard = () => api.get("/leaderboard");

// Analytics
export const getPerformanceData = () => api.get("/analytics/performance");

// Dashboard stats
export const getAdminStats = () => api.get("/admin/stats");
export const getHodStats = () => api.get("/hod/stats");
export const getFacultyStats = () => api.get("/faculty/stats");
export const getStudentStats = () => api.get("/student/stats");

export default api;
