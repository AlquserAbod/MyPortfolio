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
import { format } from "date-fns";

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
        field: "_id",
        headerName: "Monago Id",
        minWidth: 300,
      },
      {
        field: 'from',
        headerName: "From",
        minWidth:150
      },
      {
        field: "image",
        headerName: "Certificat",
        filterable: false,
        sortable: false,
        flex:2,
        align: "center",
        headerAlign: "center",
        renderCell: (row) => (
          <img src={row.value} alt="Certificat" width={"350px"}/>
        ),
      },
      {
        field: 'taken_date',
        headerName: "Taken Date",
        minWidth:150,
        renderCell: (params) => {
          const date = new Date(params.value);
          return format(date, 'yyyy-MM-dd');
        },
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
        flex:1
      },
    ],
    []
  );
  
  return (
    <div style={{ width: '100%' }}>
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
          rowHeight={350}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          pageSizeOptions={[5,10,15,20,25]}
          columns={columns}
          getRowId={(row) => row._id} 

          />
      </List>

    </div>
  );
}
