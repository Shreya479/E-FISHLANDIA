import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { useState,useEffect } from "react";


export default function Home() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'userid',headerName: 'UserId',type: 'number',width: 150,editable: true,
    },
    {
      field: 'name',headerName: 'Full Name', width: 150, editable: true,
    },
    {
      field: 'email',headerName: 'Email',width: 180,editable: true,sortable:false
    },
    
    {
      field: 'problem',
      headerName: 'Message',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      
    },
    /*{
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <p>
            <DeleteOutline
              className="orderListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </p>
        );
      },
    },*/
  ];

  const[tableData,setTableData]= useState([])
  useEffect(() => {
    fetch("http://localhost:8080/helpdesk/getAll")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])
  console.log(tableData)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  /*const rows = [
    { id: 1,userid: 101 , fullname: 'Jon Snow',email:'jon@snow.com',         message: 'Login Problem'},
    { id: 2,userid: 201 , fullname: 'Harry Potter',email:'potter@harry.com',message: 'Billing Problem' },
    { id: 3,userid: 301 , fullname: 'Cersei Lannister',email:'lann@cersei.com',message: 'Payment Problem'},
    { id: 4,userid: 401 , fullname: 'Arya Stark',email:'stark@arya.com',message: 'Login Problem'},
    {id: 5,userid: 501 , fullname: 'Ferrara Clifford',email:'cliff@ferr.com',message: 'Payment Problem' },
    {id: 6,userid: 601 , fullname: 'Snow Jon',email:'jon@snow.com',message: 'Signin Problem' },
    {id: 7,userid: 701 , fullname: 'Snow Jon',email:'jon@snow.com',message: 'Login Problem'},
    {id: 8,userid: 801 ,fullname: 'Snow Jon',email:'jon@snow.com',message: 'Login Problem'},
    
  ];*/

  return (
    <div className="home">      
      <div className="main__title">
          <img src="http://avatars.design/wp-content/uploads/2016/09/28_GIF.gif" alt="hello" />
          <div className="main__greeting">
            <h1>Welcome to FISH LANDIA..</h1>
          </div>
        </div>
      <FeaturedInfo /> 

      <div className="problems_display"><b><h2 style={{ margin:'10px 450px'}}>USER'S  HELPDESK</h2></b>
      <div style={{ height: 300, width: '80%', margin:'1px 90px' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        //checkboxSelection
        disableSelectionOnClick
      />
    </div>
      </div>

    </div>
    
  );
}