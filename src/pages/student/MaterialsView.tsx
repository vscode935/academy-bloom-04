import { FileText, Download } from "lucide-react";

const mockMaterials = [
  { id: "1", name: "DS Unit 1 Notes.pdf", subject: "Data Structures", size: "2.4 MB" },
  { id: "2", name: "DBMS ER Diagrams.pptx", subject: "DBMS", size: "5.1 MB" },
  { id: "3", name: "OS Process Scheduling.pdf", subject: "Operating Systems", size: "1.8 MB" },
];

const MaterialsView = () => (
  <div>
    <h1 className="text-2xl font-bold font-heading text-foreground mb-6">Study Materials</h1>
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
            </div>
            <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors">
              <Download size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default MaterialsView;
