import "./orderList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { orderRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
export default function OrderList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://8080-acddafabaffddeefcfbeddbecdddbadefcdd.examlyiopb.examly.io/orders")
      .then((data) => data.json())
      .then((data) => setData(data))

  }, [])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "customerId", headerName: "User ID", width: 120 },
    { field: "date", headerName: "Order Date", width: 200 },
    {
        field: "address",
        headerName: "Address",
        width: 200,
      },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="orderListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="orderList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}