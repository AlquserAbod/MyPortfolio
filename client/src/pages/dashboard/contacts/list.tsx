"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {  useUpdate } from "@refinedev/core";
import {
  DeleteButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React from "react";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { Contact } from "@/interfaces";
import { usePaginationModel } from "@/hooks/usePaginationModel";
import { PaginationKey } from '@/types';

export function ContactsList() {
  const { paginationModel, setPaginationModel } = usePaginationModel(PaginationKey.Contacts);

  const { dataGridProps } = useDataGrid<Contact>({
    syncWithLocation: true,
  });

  const { mutate } = useUpdate();

  const handleReadedChange = (row : Contact | undefined) => {
    if (row == undefined) return;
    mutate({
      resource: "contacts",
      values : { ...row, readed: !row.readed },
      id : row._id
    })
  };

  
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
        minWidth: 70,
        filterable: true,
      },
      {
        field: "last_name",
        flex: 1,
        headerName: "Last Name",
        minWidth: 70,
        filterable: true,
      },
      {
        field: "email",
        type: "email",
        flex: 1,
        headerName: "Email",
        minWidth: 100,
        filterable: true,
      },
      {
        field: "readed",
        type: "boolean",
        flex: 1,
        headerName: "Readed",
        minWidth: 25,
        filterable: true,
        align:"center",
        renderCell: (params) => (
          <Checkbox
            icon={<Cancel color="error" />}
            checkedIcon={<CheckCircle color="success" />}
            checked={params.value}
            onChange={() => handleReadedChange(params.row)}
          />
        )
      },

      {
        field: "message",
        flex: 1,
        headerName: "Message",
        minWidth: 400,
        filterable: true,
        renderCell: (params) => <div style={{ whiteSpace: 'normal' }}>{params.value}</div>,
      },
      {
        field: "actions",
        headerName: "Actions",
        sortable: false,
        renderCell: function render({ row }) {
                    
          return (
            <>
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
