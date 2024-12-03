import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid"
import './userTable.scss'

const UserTable = (props) => {
  

  
  

        return (
          <div className="InfoTable">
                  <DataGrid className="dataGrid"
              rows={props.rows}
              columns={props.columns}
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

export default UserTable