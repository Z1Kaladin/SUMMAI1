import InfoTable from "../../components/InformationTable/InfoTable"
import { GridColDef } from "@mui/x-data-grid";
import { Users } from "../../data";
import { useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import Add from "../../components/Add/Add";




const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 200,
    type: "string",
  },
 
];

const User = () => {
  const [open, setOpen] = useState(false);



  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>
      <DataTable slug="users" columns={columns} rows={Users} />

      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};


export default User