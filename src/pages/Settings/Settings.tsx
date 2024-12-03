import "./Settings.scss"
import InfoTable from "../../components/InformationTable/InfoTable"
import { GridColDef } from "@mui/x-data-grid";
import { Users } from "../../data";
import { useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import Add from "../../components/Add/Add";


const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "Keyword",
    type: "string",
    headerName: "Keyword",
    width: 150,
  },

 
];

const Settings = () => {
  const [open, setOpen] = useState(false);



  return (
    <div className="users">
      <div className="info">
        <h1>Keywords</h1>
        <button onClick={() => setOpen(true)}>Add New Keyword</button>
      </div>
      <DataTable slug="users" columns={columns} rows={Users} />

      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};


export default Settings