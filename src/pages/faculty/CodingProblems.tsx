import { useState } from "react";
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import { Plus } from "lucide-react";

const mockProblems = [
  { title: "Two Sum", difficulty: "Easy", testCases: 5, submissions: 120 },
  { title: "Linked List Reversal", difficulty: "Medium", testCases: 8, submissions: 85 },
  { title: "Graph BFS/DFS", difficulty: "Hard", testCases: 10, submissions: 40 },
];

const diffColor: Record<string, string> = {
  Easy: "bg-success/10 text-success",
  Medium: "bg-warning/10 text-warning",
  Hard: "bg-destructive/10 text-destructive",
};

const CodingProblems = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const columns = [
    { key: "title", label: "Problem" },
    { key: "difficulty", label: "Difficulty", render: (v: string) => (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${diffColor[v]}`}>{v}</span>
    )},
    { key: "testCases", label: "Test Cases" },
    { key: "submissions", label: "Submissions" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-heading text-foreground">Coding Problems</h1>
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus size={18} /> Create Problem
        </button>
      </div>
      <DataTable columns={columns} data={mockProblems} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Create Coding Problem">
        <div className="space-y-4">
          <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Problem Title" />
          <select className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring appearance-none">
            <option>Easy</option><option>Medium</option><option>Hard</option>
          </select>
          <textarea className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none h-24" placeholder="Problem description..." />
          <textarea className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none h-20" placeholder="Test cases (JSON format)" />
          <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Create Problem</button>
        </div>
      </Modal>
    </div>
  );
};

export default CodingProblems;
