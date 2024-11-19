import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import "./historyTable.scss"
import { Link } from "react-router-dom";



type Props = {
  columns: GridColDef[],
  rows:object[]
  slug:string;
}

const HistoryTable = (props:Props) => {

  const actionColum:GridColDef={
    field:"action",
    headerName:"Action",
    width:200,
    renderCell:(params)=>{
      return (
      <div className="action">
        <Link to={`/${props.slug}/${params.row.id}`}>
        <img src="/view.svg" alt="" />        
        </Link>
      </div>
      )
    }
  }

  

  return (
    <div className="InfoTable">
            <DataGrid className="dataGrid"
        rows={props.rows}
        columns={[...props.columns, actionColum]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar:{
            showQuickFilter:true,
            quickFilterProps: { debounceMs: 500 },
          }
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        
        disableDensitySelector
      />
    </div>
  )
}

export default HistoryTable