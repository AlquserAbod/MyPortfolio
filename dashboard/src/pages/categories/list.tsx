"use client";

import { Category } from "@/interfaces";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";

export function CategoryList() {
  const [paginationModel, setPaginationModel] = React.useState({ pageSize: 5, page: 0 });

  const { dataGridProps } = useDataGrid<Category>({
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
        field: "title_en",
        flex: 1,
        headerName: "Title (English)",
        minWidth: 100,
        filterable: true,
      },
      {
        field: "title_tr",
        flex: 1,
        headerName: "Title (Trukish)",
        minWidth: 100,
        filterable: true,
      },
      {
        field: "title_ar",
        flex: 1,
        headerName: "Title (Arabic)",
        minWidth: 100,
        filterable: true,
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
