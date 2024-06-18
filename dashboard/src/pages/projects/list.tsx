"use client";

import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";
import { Category } from "@/interfaces";
import { Link } from "@mui/material";
import { DataGrid, GridColDef, GridToolbarContainer } from "@mui/x-data-grid";
import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useDataGrid,
} from "@refinedev/mui";
import React, { useState } from "react";
import { usePaginationModel } from "@/hooks/usePaginationModel";
import { PaginationKey } from '@/types';

export function ProjectList() {
  const [language, setLanguage] = useState('en'); // Default language is English
  const { paginationModel, setPaginationModel } = usePaginationModel(PaginationKey.Projects);
  const { dataGridProps } = useDataGrid<Category>({ syncWithLocation: true });
  
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
        headerName: "Project Name",
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
            <Link href={`/categories/show/${row.category._id}`}>{row.category[`title_${language}`]}</Link>
          )
        },
      },
      {
        field: `short_description_${language}`,
        headerName: `Short Description (${language})`,
        flex: 1,
        minWidth: 200,
        filterable: true,
        renderCell: (params) => <div style={{ whiteSpace: 'normal' }}>{params.value}</div>,
      },
      {
        field: "visit_url",
        headerName: "Visit URL",
        flex: 1,
        minWidth: 80,
        align: "center",
        filterable: false,
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <a href={row.visit_url} target="_blank" rel="noopener noreferrer">
              Click to visit
            </a>
          )
        }
      },
      {
        field: "github_url",
        headerName: "GitHub URL",
        minWidth: 100,
        align: "center",
        filterable: false,
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <a href={row.github_url} target="_blank" rel="noopener noreferrer">
              project GitHub
            </a>
          )
        }
      },
      {
        field: "main_image",
        flex: 1,
        headerName: "Main Image",
        minWidth: 150,
        align: "center",
        filterable: false,
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <img
                src={row.main_image}
                alt="Profile Preview"
                width={100}
                height={100}
            />
          )
        }
      },
      {
        field: "project_images",
        flex: 1,
        headerName: "Project Images",
        minWidth: 300,
        align: "center",
        filterable: false,
        sortable: false,
        renderCell: function render({ row }) {
          return (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {row.project_images.map((image : string, index : number) => (
                <img
                  key={index}
                  src={image}
                  alt={`Project Image ${index + 1}`}
                  style={{ maxWidth: '30%', maxHeight: '50px', objectFit: 'contain' }}
                />
              ))}
            </div>
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
    [language]
  );
  
  const CustomToolbar = () => (
    <GridToolbarContainer sx={{marginBottom:3}}>
      <LanguageSelector language={language} setLanguage={setLanguage} />
    </GridToolbarContainer>
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
        components={{ Toolbar: CustomToolbar }}
        sortingOrder={['asc']}
        filterMode="client"
        paginationMode="client"
        sortingMode="client"
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        pageSizeOptions={[5,10,15,20,25]}
        columns={columns}
        rowHeight={120}
        autoHeight
        getRowId={(row) => row._id} 

        />
    </List>
  );
}
