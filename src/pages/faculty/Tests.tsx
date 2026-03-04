import { useState } from "react";
import DataTable from "@/components/DataTable";
import Modal from "@/components/Modal";
import { Plus, Trash2 } from "lucide-react";

const mockTests = [
  { id: "1", title: "DS Mid-Sem Quiz", questions: 20, duration: "30 min", attempts: 45 },
  { id: "2", title: "DBMS Unit Test", questions: 15, duration: "20 min", attempts: 38 },
];

const Tests = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [questions, setQuestions] = useState([{ question: "", options: ["", "", "", ""], correct: 0 }]);

  const addQuestion = () => {
    setQuestions([...questions, { question: "", options: ["", "", "", ""], correct: 0 }]);
  };

  const columns = [
    { key: "title", label: "Test Title" },
    { key: "questions", label: "Questions" },
    { key: "duration", label: "Duration" },
    { key: "attempts", label: "Attempts" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-heading text-foreground">MCQ Tests</h1>
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus size={18} /> Create Test
        </button>
      </div>
      <DataTable columns={columns} data={mockTests} />
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Create MCQ Test">
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Test Title" />
          <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Duration (minutes)" type="number" />
          {questions.map((q, qi) => (
            <div key={qi} className="p-4 rounded-xl bg-secondary/50 border border-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Question {qi + 1}</span>
                {qi > 0 && <button onClick={() => setQuestions(questions.filter((_, i) => i !== qi))} className="text-destructive"><Trash2 size={14} /></button>}
              </div>
              <input className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Question text" />
              {q.options.map((_, oi) => (
                <input key={oi} className="w-full px-3 py-2 rounded-lg bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder={`Option ${oi + 1}`} />
              ))}
            </div>
          ))}
          <button onClick={addQuestion} className="w-full py-2 rounded-xl border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">+ Add Question</button>
          <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Create Test</button>
        </div>
      </Modal>
    </div>
  );
};

export default Tests;
