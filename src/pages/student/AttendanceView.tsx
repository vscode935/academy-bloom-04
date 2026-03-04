import DataTable from "@/components/DataTable";

const mockAttendance = [
  { date: "2026-03-01", subject: "Data Structures", status: "Present" },
  { date: "2026-03-01", subject: "DBMS", status: "Present" },
  { date: "2026-03-02", subject: "Data Structures", status: "Absent" },
  { date: "2026-03-02", subject: "Operating Systems", status: "Present" },
  { date: "2026-03-03", subject: "DBMS", status: "Present" },
];

const AttendanceView = () => {
  const columns = [
    { key: "date", label: "Date" },
    { key: "subject", label: "Subject" },
    { key: "status", label: "Status", render: (v: string) => (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${v === "Present" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>{v}</span>
    )},
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-foreground mb-6">My Attendance</h1>
      <div className="bg-card rounded-xl border border-border p-6 mb-6">
        <div className="flex items-center gap-8">
          <div>
            <p className="text-sm text-muted-foreground">Overall Attendance</p>
            <p className="text-3xl font-bold font-heading text-foreground">87%</p>
          </div>
          <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "87%" }} />
          </div>
        </div>
      </div>
      <DataTable columns={columns} data={mockAttendance} />
    </div>
  );
};

export default AttendanceView;
