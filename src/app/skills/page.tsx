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
import { Typography } from "@mui/material";
import Link from '@mui/material/Link';


export default function SkillsList() {
  const [paginationModel, setPaginationModel] = React.useState({ pageSize: 5, page: 0 });

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
        field: "name",
        flex: 1,
        headerName: "Name",
        minWidth: 100,
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
            <Image
              alt="Icon"
              width={75}
              height={75}
              priority={true} // {false} | {true}
              style={{ borderRadius: "50%"}}
              src={row.icon} 
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
        getRowClassName={() => styles.rowSpacing} // Apply row spacing class

        />
    </List>
  );
}
