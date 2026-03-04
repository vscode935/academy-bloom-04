import { useState } from "react";
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import { Plus } from "lucide-react";

const mockClasses = [
  { id: "1", name: "CS-A", semester: "6th", mentor: "Dr. Smith", students: 60 },
  { id: "2", name: "CS-B", semester: "6th", mentor: "Prof. Jane", students: 58 },
  { id: "3", name: "CS-C", semester: "4th", mentor: "Dr. Patel", students: 55 },
];

const Classes = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const columns = [
    { key: "name", label: "Class" },
    { key: "semester", label: "Semester" },
    { key: "mentor", label: "Mentor" },
    { key: "students", label: "Students" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-heading text-foreground">Classes</h1>
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus size={18} /> Create Class
        </button>
      </div>
      <DataTable columns={columns} data={mockClasses} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Create Class">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Class Name</label>
            <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. CS-A" />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Assign Mentor</label>
            <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Faculty name" />
          </div>
          <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Create</button>
        </div>
      </Modal>
    </div>
  );
};

export default Classes;
