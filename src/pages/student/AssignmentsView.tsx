import { Upload } from "lucide-react";

const mockAssignments = [
  { id: "1", title: "Binary Trees Implementation", subject: "Data Structures", deadline: "2026-03-15", status: "Pending" },
  { id: "2", title: "SQL Queries Practice", subject: "DBMS", deadline: "2026-03-20", status: "Submitted" },
  { id: "3", title: "Process Scheduling Sim", subject: "Operating Systems", deadline: "2026-03-10", status: "Overdue" },
];

const statusColor: Record<string, string> = {
  Pending: "bg-warning/10 text-warning",
  Submitted: "bg-success/10 text-success",
  Overdue: "bg-destructive/10 text-destructive",
};

const AssignmentsView = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-foreground mb-6">My Assignments</h1>
      <div className="space-y-4">
        {mockAssignments.map((a) => (
          <div key={a.id} className="bg-card rounded-xl border border-border p-5 flex items-center justify-between card-hover">
            <div>
              <p className="text-sm font-medium text-foreground">{a.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{a.subject} • Due: {a.deadline}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusColor[a.status]}`}>{a.status}</span>
              {a.status === "Pending" && (
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity">
                  <Upload size={14} /> Submit
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentsView;
