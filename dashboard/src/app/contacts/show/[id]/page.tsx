"use client";

import { Cancel, CheckCircle } from "@mui/icons-material";
import { Box, Checkbox, Stack, Typography } from "@mui/material";
import { useShow, useUpdate } from "@refinedev/core";
import {
  BooleanField,
  EmailField,
  MarkdownField,
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export default function BlogPostShow() {


  const { queryResult } = useShow({
    resource: "contacts",
  });

  const { data, isLoading } = queryResult;

  const record = data?.data;

  const { mutate } = useUpdate();

  const handleReadedChange = (row : any) => {
    mutate({
      resource: "contacts",
      values : { ...row, readed: !row.readed },
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
        <MarkdownField value={record?.last_name} />

        <Typography variant="body1" fontWeight="bold">
          {"Last Name"}
        </Typography>
        <MarkdownField value={record?.last_name} />

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
            checked={record?.readed.value}
            onChange={() => handleReadedChange(record)}
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
