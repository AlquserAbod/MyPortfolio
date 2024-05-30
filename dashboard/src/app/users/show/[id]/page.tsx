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
    resource: "users",

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
          {"Profile Pic"}
        </Typography>
        <Image
            src={record?.profile_pic}
            alt="Profile"
            width={100}
            height={100}
            
            style={{ borderRadius: '50%', textAlign: "center" }}
          />

        <Typography variant="body1" fontWeight="bold">
          {"First Name"}
        </Typography>
        <MarkdownField value={record?.first_name} />

        <Typography variant="body1" fontWeight="bold">
          {"Last Name"}
        </Typography>
        <MarkdownField value={record?.last_name} />


        <Typography variant="body1" fontWeight="bold">
          {"Email"}
        </Typography>
        <EmailField value={record?.email} />
      </Stack>
    </Show>
  );
}
