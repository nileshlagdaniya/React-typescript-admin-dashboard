import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable";
// import { userRows } from "../../data";
import "./users.scss";
import { useState } from "react";
import Add from "../../components/add/Add";
import { useQuery } from "@tanstack/react-query";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 50 },
  {
    field: "img",
    headerName: "Avatar",
    width: 80,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },

  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    type: "string",
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    type: "string",
  },
  {
    field: "email",
    headerName: "Email",
    type: "email",
    width: 180,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },

  { field: "verified", headerName: "Verified", width: 100, type: "boolean" },
];
const Users = () => {
  const [open, setOpen] = useState(false);

  const { isLoading, data } = useQuery({
    queryKey: ["allusers"],
    queryFn: () =>
      fetch("http://localhost:8800/api/users").then((res) => res.json()),
  });

  return (
    <div className="users">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New User</button>
      </div>

      {isLoading ? (
        "Loading...."
      ) : (
        <DataTable slug="users" columns={columns} rows={data} />
      )}

      {open && <Add setOpen={setOpen} slug="User" columns={columns} />}
    </div>
  );
};

export default Users;
