import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
import "./products.scss";

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
    field: "title",
    headerName: "Title",
    width: 250,
    type: "string",
  },
  {
    field: "color",
    headerName: "Color",
    width: 100,
    type: "string",
  },
  {
    field: "price",
    headerName: "Price",
    type: "string",
    width: 150,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 130,
    type: "string",
  },

  { field: "inStock", headerName: "In Stock", width: 100, type: "boolean" },
];

const Products = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="products">
      <div className="info">
        <h1>Users</h1>
        <button onClick={() => setOpen(true)}>Add New Products</button>
      </div>

      <DataTable slug="products" columns={columns} rows={products} />

      {open && <Add setOpen={setOpen} slug="Products" columns={columns} />}
    </div>
  );
};

export default Products;
