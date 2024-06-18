"use client";

import { Certificast } from "@/interfaces";
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

export function CertificastList() {
  const { paginationModel, setPaginationModel } = usePaginationModel(PaginationKey.Certificates);

  const { dataGridProps } = useDataGrid<Certificast>({
    syncWithLocation: true,
    resource: "certificates"
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
        field: "image",
        headerName: "Certificat",
        filterable: false,
        sortable: false,
        minWidth:300,
        renderCell: (row) => (
          <img src={row.value} alt="Certificat"                 width={300}
                height={300}/>
        )
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
        rowHeight={300}
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
