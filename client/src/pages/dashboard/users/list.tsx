import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";
import { usePaginationModel } from "@/hooks/usePaginationModel";
import { PaginationKey } from '@/types';

// pagination mode is client
// filtering mode is in client
// sort mode is in client and his asc 
export function UserList() {
  const { paginationModel, setPaginationModel } = usePaginationModel(PaginationKey.Users);

  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });
  
  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "seq",
        headerName: "ID",
        minWidth: 50,
        renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1,
      },
      {
        field: "_id",
        headerName: "MongoDB ID",
        minWidth: 250,
        filterable: true,
      },
      {
        field: "first_name",
        flex: 1,
        headerName: "First Name",
        minWidth: 100,
        filterable: true,
      },
      {
        field: "last_name",
        flex: 1,
        headerName: "Last Name",
        minWidth: 100,
        filterable: true
      },
      {
        field: "email",
        flex: 1,
        headerName: "Email",
        minWidth: 250,
        filterable: true
      },
      {
        field: "profile_pic",
        flex: 1,
        headerName: "Profile Picture",
        minWidth: 100,
        align: "center",
        filterable: false,
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <img
                src={row.profile_pic}
                alt="Profile Preview"
                width={50}
                height={50}
                style={{ borderRadius: '50%' }}
            />
          )
        }
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
                    
          return (
            <>
              <EditButton hideText recordItemId={row._id} />
              <ShowButton hideText recordItemId={row._id} />
              <DeleteButton hideText recordItemId={row._id} />
            </>
          );
        },
        align: "center",
        headerAlign: "center",
        minWidth: 80,
      },
    ],
    []
  );
  
  return (
    <List>
      <DataGrid
        {...dataGridProps} 
        pagination
        initialState={{
          pagination: {
            paginationModel: {page: 0, pageSize: 5}
          },
        }}
        sortingOrder={['asc']}
        filterMode="client"
        paginationMode="client"
        sortingMode="client"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5,10,15,20,25]}
        columns={columns} 
        autoHeight
        getRowId={(row) => row._id} 
        />
    </List>
  );
}
