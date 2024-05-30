"use client";

import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  EmailField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";
import Image from 'next/image';

export default function BlogPostShow() {


  const { queryResult } = useShow({
    resource: "categories",

  });

  const { data, isLoading } = queryResult;

  const record = data?.data;

  console.log(record);
  
  return (
    <Show isLoading={isLoading}>
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?._id ?? ""} />

        <Typography variant="body1" fontWeight="bold">
          {"English Title"}
        </Typography>
        <MarkdownField value={record?.title_en} />

        <Typography variant="body1" fontWeight="bold">
          {"English Title"}
        </Typography>
        <MarkdownField value={record?.title_en} />

        <Typography variant="body1" fontWeight="bold">
          {"Turkish Title"}
        </Typography>
        <MarkdownField value={record?.title_tr} />

        <Typography variant="body1" fontWeight="bold">
          {"Arabic Title"}
        </Typography>
        <MarkdownField value={record?.title_ar} />

      </Stack>
    </Show>
  );
}
