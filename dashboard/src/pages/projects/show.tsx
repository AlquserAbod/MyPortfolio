"use client";

import LanguageSelector from "@/components/LanguageSelector/LanguageSelector";
import { Category, Project } from "@/interfaces";
import { Link, Stack, Typography, Button, Grid, Box } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";
import { useState } from "react";


export function ProjectShow() {
  const [language, setLanguage] = useState('en'); // Specify the possible language values

  const { queryResult } = useShow<Project>({
    resource: "projects",
  });

  const { data, isLoading } = queryResult;

  const record = data?.data;

  console.log(record);

  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <LanguageSelector language={language} setLanguage={setLanguage} />

        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?._id ?? ""} />

        <Typography variant="body1" fontWeight="bold">
          {"Name"}
        </Typography>
        <MarkdownField value={record?.name ?? ""} />

        <Typography variant="body1" fontWeight="bold">
          {"Category"}
        </Typography>
        <Link href={`/categories/show/${record?.category._id}`}>
          {record?.category ? record.category[`title_${language}` as keyof Category] : ""}
        </Link>

        <Typography variant="body1" fontWeight="bold">
          {"Visit URL"}
        </Typography>
        {record?.visit_url && (
          <Box>
            <Button variant="contained" color="primary" href={record.visit_url} target="_blank">
              Visit Project
            </Button>
          </Box>
        )}

        <Typography variant="body1" fontWeight="bold">
          {"GitHub URL"}
        </Typography>
        {record?.github_url && (
          <Box>
            <Button variant="contained" color="secondary" href={record.github_url} target="_blank">
              View on GitHub
            </Button>

          </Box>
        )}

        <Typography variant="body1" fontWeight="bold">
          {"Main Image"}
        </Typography>
        {record?.main_image && (
          <img src={record.main_image} alt="Main project" style={{ width: '20%', objectFit: 'cover' }} />
        )}

        <Typography variant="body1" fontWeight="bold">
          {"Project Images"}
        </Typography>
        <Grid container spacing={2} mt={2} mb={2} justifyContent="center" alignItems="center">
          {record?.project_images?.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box display="flex" justifyContent="center">
                <img src={image} alt={`Project image ${index + 1}`} style={{ width: '40%', objectFit: 'cover' }} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body1" fontWeight="bold">
          {`Short Description (${language.toUpperCase()})`}
        </Typography>
        <MarkdownField value={record?.[`short_description_${language}` as keyof Project] as string ?? ""}  />
        
        <Typography variant="body1" fontWeight="bold">
          {`Description (${language.toUpperCase()})`}
        </Typography>
        {record?.[`description_${language}` as keyof Project] && (
          <Box dangerouslySetInnerHTML={{ __html: record[`description_${language}` as keyof Project] as string }} />
        )}
        
      </Stack>
    </Show>
  );
}
