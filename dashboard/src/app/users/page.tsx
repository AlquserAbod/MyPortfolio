"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useMany } from "@refinedev/core";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";
import styles from './styles.module.css'; 
import Image from "next/image";

// pagination mode is client
// filtering mode is in client
// sort mode is in client and his asc 
export default function UserList() {
  const [paginationModel, setPaginationModel] = React.useState({ pageSize: 5, page: 0 });

  const { dataGridProps } = useDataGrid({
    syncWithLocation: true,
  });

  const { data: userData, isLoading: userIsLoading } = useMany({
    resource: "users",
    ids:
    dataGridProps?.rows
    ?.map((item: any) => item?.category?.id)
    .filter(Boolean) ?? [],
    
    queryOptions: {      
      enabled: !!dataGridProps?.rows,
    },
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
            <Image
              alt="profile picture"
              width={50}
              height={50}
              style={{ borderRadius: "50%"}}
              src={row.profile_pic} 
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
        getRowClassName={() => styles.rowSpacing} // Apply row spacing class

        />
    </List>
  );
}
