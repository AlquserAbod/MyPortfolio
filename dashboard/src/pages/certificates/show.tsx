"use client";

import { Certificast } from "@/interfaces";
import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  MarkdownField,
  Show,
} from "@refinedev/mui";

export function CertificastShow() {


  const { queryResult } = useShow<Certificast>({
    resource: "certificates",

  });

  const { data, isLoading } = queryResult;

  const record = data?.data;
  
  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <MarkdownField value={record?._id ?? ""} />


        <Typography variant="body1" fontWeight="bold">
          {"Certificast"}
        </Typography>
        {record?.image && (
          <img src={record.image} alt="Main project" style={{ width: '20%', objectFit: 'cover' }} />
        )}        
      </Stack>
    </Show>
  );
}
