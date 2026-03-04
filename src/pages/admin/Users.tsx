import DataTable from "@/components/DataTable";

const mockUsers = [
  { name: "Dr. Smith", role: "HOD", email: "smith@college.edu", status: "Active" },
  { name: "Jane Doe", role: "Faculty", email: "jane@college.edu", status: "Active" },
  { name: "Mike Ross", role: "Student", email: "mike@college.edu", status: "Active" },
  { name: "Sarah Lee", role: "Admin", email: "sarah@college.edu", status: "Inactive" },
];

const Users = () => {
  const columns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Role", render: (v: string) => (
      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{v}</span>
    )},
    { key: "email", label: "Email" },
    { key: "status", label: "Status", render: (v: string) => (
      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${v === "Active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>{v}</span>
    )},
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold font-heading text-foreground mb-6">Users</h1>
      <DataTable columns={columns} data={mockUsers} />
    </div>
  );
};

export default Users;
