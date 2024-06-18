"use client";

import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';
import { Skills } from "@/interfaces/Skills";
import { usePaginationModel } from "@/hooks/usePaginationModel";
import { PaginationKey } from '@/types';
import React from "react";


export function SkillList() {
  const { paginationModel, setPaginationModel } = usePaginationModel(PaginationKey.Skills);

  const { dataGridProps } = useDataGrid<Skills>({
    syncWithLocation: true,
  });
  
  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "seq",
        headerName: "ID",
        minWidth: 10,
        renderCell: (params) => params.api.getAllRowIds().indexOf(params.id) + 1,
      },
      {
        field: "_id",
        headerName: "MongoDB ID",
        minWidth: 250,
        filterable: true,
      },
      {
        field: "name",
        flex: 1,
        headerName: "Name",
        minWidth: 10,
        filterable: true,
      },
      {
        field: "category",
        flex: 1,
        headerName: "Category",
        minWidth: 100,
        filterable: true,
        renderCell: function ({row})  {          
          return (
            <Link href={`/categories/show/${row.category._id}`}>{row.category.title_en}</Link>
          )
        },
      },
      {
        field: "proficiency",
        flex: 1,
        headerName: "Proficiency",
        minWidth: 40,
        filterable: true,
        renderCell: function render({row})  {
          return (
            <Typography>{row.proficiency}%</Typography>
          )
        }
      },
      {
        field: "icon",
        flex: 1,
        headerName: "Icon",
        minWidth: 100,
        align: "center",
        filterable: false,
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <img
              src={row.icon}
              alt="Profile Preview"
              width={150}
              height={150}
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
        rowHeight={100}
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
