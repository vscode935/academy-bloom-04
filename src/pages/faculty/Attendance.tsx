import { useState } from "react";
import { ChevronDown } from "lucide-react";

const students = [
  { id: "1", name: "Alice Johnson", roll: "CS001" },
  { id: "2", name: "Bob Williams", roll: "CS002" },
  { id: "3", name: "Charlie Brown", roll: "CS003" },
  { id: "4", name: "Diana Ross", roll: "CS004" },
  { id: "5", name: "Edward Norton", roll: "CS005" },
];

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState("CS-A");
  const [attendance, setAttendance] = useState<Record<string, boolean>>({});

  const toggleAttendance = (id: string) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-foreground mb-6">Mark Attendance</h1>

      <div className="mb-6 flex items-center gap-4">
        <div className="relative">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="px-4 py-3 pr-10 rounded-xl bg-secondary border border-border text-foreground text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option>CS-A</option>
            <option>CS-B</option>
            <option>CS-C</option>
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        </div>
        <input type="date" className="px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>

      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/50">
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">Roll No</th>
              <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">Name</th>
              <th className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s) => (
              <tr key={s.id} className="border-b border-border last:border-0">
                <td className="px-6 py-4 text-sm text-foreground">{s.roll}</td>
                <td className="px-6 py-4 text-sm text-foreground">{s.name}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => toggleAttendance(s.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                      attendance[s.id]
                        ? "bg-success/10 text-success"
                        : "bg-destructive/10 text-destructive"
                    }`}
                  >
                    {attendance[s.id] ? "Present" : "Absent"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end">
        <button className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          Submit Attendance
        </button>
      </div>
    </div>
  );
};

export default Attendance;
