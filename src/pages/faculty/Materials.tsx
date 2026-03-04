import { useState } from "react";
import Modal from "@/components/Modal";
import { Plus, FileText, Download } from "lucide-react";

const mockMaterials = [
  { id: "1", name: "DS Unit 1 Notes.pdf", subject: "Data Structures", uploaded: "2026-02-20", size: "2.4 MB" },
  { id: "2", name: "DBMS ER Diagrams.pptx", subject: "DBMS", uploaded: "2026-02-25", size: "5.1 MB" },
  { id: "3", name: "OS Process Scheduling.pdf", subject: "Operating Systems", uploaded: "2026-03-01", size: "1.8 MB" },
];

const Materials = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold font-heading text-foreground">Study Materials</h1>
        <button onClick={() => setModalOpen(true)} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          <Plus size={18} /> Upload Material
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockMaterials.map((m) => (
          <div key={m.id} className="bg-card rounded-xl border border-border p-5 card-hover">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText size={20} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{m.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{m.subject} • {m.size}</p>
                <p className="text-xs text-muted-foreground">{m.uploaded}</p>
              </div>
              <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
                <Download size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title="Upload Material">
        <div className="space-y-4">
          <input className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" placeholder="Material Title" />
          <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
            <p className="text-sm text-muted-foreground">Drag & drop file or click to browse</p>
            <input type="file" className="mt-2 text-sm" />
          </div>
          <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">Upload</button>
        </div>
      </Modal>
    </div>
  );
};

export default Materials;
