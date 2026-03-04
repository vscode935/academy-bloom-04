import { useState } from "react";
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import { Plus, Pencil, Trash2 } from "lucide-react";

const mockDepartments = [
  { id: "1", name: "Computer Science", hod: "Dr. Smith", faculty: 12, students: 320 },
  { id: "2", name: "Electronics", hod: "Dr. Patel", faculty: 8, students: 250 },
  { id: "3", name: "Mechanical", hod: "Dr. Johnson", faculty: 10, students: 280 },
  { id: "4", name: "Civil Engineering", hod: "Dr. Williams", faculty: 9, students: 200 },
];

const Departments = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");

  const columns = [
    { key: "name", label: "Department" },
    { key: "hod", label: "HOD" },
    { key: "faculty", label: "Faculty" },
    { key: "students", label: "Students" },
    {
      key: "actions", label: "Actions",
      render: (_: any, row: any) => (
        <div className="flex gap-2">
          <button className="p-1.5 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"><Pencil size={16} /></button>
          <button className="p-1.5 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={16} /></button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-heading text-foreground">Departments</h1>
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus size={18} /> Add Department
        </button>
      </div>
      <DataTable columns={columns} data={mockDepartments} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Add Department">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1.5 block">Department Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="e.g. Computer Science" />
          </div>
          <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Create Department</button>
        </div>
      </Modal>
    </div>
  );
};

export default Departments;
