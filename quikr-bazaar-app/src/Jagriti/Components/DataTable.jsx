import React from 'react';
import "../Styles/datatable.css";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from '../datatablesource';
import { Link } from 'react-router-dom';


const DataTable = () => {

  const id=1;

  const actionColumn= [
    {field: 'action', headerName: 'Action', width: 200, renderCell:() => {
    return(
      <div className="cellAction">
        <Link to={`/users/${id}`}>
        <div>
          <button className="viewButton">View</button>
        </div>
        </Link>
        {/* <div>
          <button className='deleteButton' onClick={handleDelete}>Delete</button>
        </div> */}
      </div>
    )
  } }]


  return (
    <div className='datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        style={{ color: "black",backgroundColor: "white" }}
      />
    </div>
  )
}

export default DataTable