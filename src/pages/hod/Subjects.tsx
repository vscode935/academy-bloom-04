import { useState } from "react";
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import { Plus } from "lucide-react";

const mockSubjects = [
  { name: "Data Structures", faculty: "Dr. Smith", class: "CS-A", code: "CS301" },
  { name: "Operating Systems", faculty: "Prof. Jane", class: "CS-B", code: "CS302" },
  { name: "DBMS", faculty: "Dr. Patel", class: "CS-A", code: "CS303" },
];

const Subjects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const columns = [
    { key: "code", label: "Code" },
    { key: "name", label: "Subject" },
    { key: "faculty", label: "Faculty" },
    { key: "class", label: "Class" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-heading text-foreground">Subjects</h1>
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus size={18} /> Add Subject
        </button>
      </div>
      <DataTable columns={columns} data={mockSubjects} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add Subject">
        <div className="space-y-4">
          <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Subject Name" />
          <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Assigned Faculty" />
          <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Linked Class" />
          <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Create Subject</button>
        </div>
      </Modal>
    </div>
  );
};

export default Subjects;
