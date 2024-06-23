"use client";

import { Contact } from "@/interfaces";
import { Cancel, CheckCircle } from "@mui/icons-material";
import { Box, Checkbox, Stack, Typography } from "@mui/material";
import { useShow, useUpdate } from "@refinedev/core";
import {
  EmailField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";
import { useEffect, useState } from "react";

export function ContactsShow() {


  const { queryResult } = useShow<Contact>({
    resource: "contacts",
  });
  
  const { data, isLoading } = queryResult;
  
  const record = data?.data;

  

  const { mutate } = useUpdate();



  const handleToggleReaded = (row: Contact | undefined) => {
    if(row == undefined) return;

    mutate({
      resource: "contacts",
      values : {...row ,readed: !row.readed },
      id : row._id
    })
  };

  return (
    <Show isLoading={isLoading} >
      <Stack gap={1}>
        <Typography variant="body1" fontWeight="bold">
          {"ID"}
        </Typography>
        <TextField value={record?._id ?? ""} />

        <Typography variant="body1" fontWeight="bold">
          {"First Name"}
        </Typography>
        <TextField value={record?.first_name} />

        <Typography variant="body1" fontWeight="bold">
          {"Last Name"}
        </Typography>
        <TextField value={record?.last_name} />

        <Typography variant="body1" fontWeight="bold">
          {"Email"}
        </Typography>
        <EmailField value={record?.email} />

        <Typography variant="body1" fontWeight="bold">
          {"Readed"}
        </Typography>
        <Box>
          <Checkbox
            icon={<Cancel color="error" />}
            checkedIcon={<CheckCircle color="success" />}
            checked={record?.readed ?? false}
            onChange={() => handleToggleReaded(record)}
          />
        </Box>

        <Typography variant="body1" fontWeight="bold">
          {"Message :"}
        </Typography>
        <TextField value={record?.message} />

      </Stack>
    </Show>
  );
}
