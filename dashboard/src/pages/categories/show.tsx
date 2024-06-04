"use client";

import { Category } from "@/interfaces";
import { Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export function CategoryShow() {


  const { queryResult } = useShow<Category>({
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
