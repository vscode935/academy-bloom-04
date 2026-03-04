import { useState } from "react";
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import { Plus } from "lucide-react";

const mockAssignments = [
  { title: "Binary Trees Implementation", subject: "Data Structures", deadline: "2026-03-15", submissions: 42 },
  { title: "SQL Queries Practice", subject: "DBMS", deadline: "2026-03-20", submissions: 38 },
];

const Assignments = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const columns = [
    { key: "title", label: "Title" },
    { key: "subject", label: "Subject" },
    { key: "deadline", label: "Deadline" },
    { key: "submissions", label: "Submissions" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-heading text-foreground">Assignments</h1>
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus size={18} /> Create Assignment
        </button>
      </div>
      <DataTable columns={columns} data={mockAssignments} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Create Assignment">
        <div className="space-y-4">
          <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Assignment Title" />
          <input type="date" className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
          <textarea className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none h-24" placeholder="Instructions..." />
          <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Create</button>
        </div>
      </Modal>
    </div>
  );
};

export default Assignments;
