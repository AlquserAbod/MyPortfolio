"use client";

import { Link, Stack, Typography } from "@mui/material";
import { useShow } from "@refinedev/core";
import {
  Show,
  TextFieldComponent as TextField,
} from "@refinedev/mui";

export function SkillShow() {
  const { queryResult } = useShow({
    resource: "skills",
  });

  const { data, isLoading } = queryResult;

  const record = data?.data;
  
  return (
    <Show isLoading={isLoading}>
    <Stack gap={1}>
      <Typography variant="body1" fontWeight="bold">
        {"ID"}
      </Typography>
      <TextField value={record?._id ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {"Name"}
      </Typography>
      <TextField value={record?.name ?? ""} />

      <Typography variant="body1" fontWeight="bold">
        {"Proficiency"}
      </Typography>
      <TextField value={`${record?.proficiency ?? 0}%`} />

      <Typography variant="body1" fontWeight="bold">
        {"Icon"}
      </Typography>
      <img
        src={record?.icon}
        alt="Profile Preview"
        width={150}
        height={150}
        style={{ borderRadius: '50%' }}
      />

      <Typography variant="body1" fontWeight="bold">
        {"Category"}
      </Typography>
        <Link underline="hover"  href={`/categories/show/${record?.category._id}`}>
          <Typography variant="body1" color="primary">
            {record?.category.title_en}
          </Typography>
        </Link>

      {/* Add other fields as needed */}
    </Stack>
  </Show>
  );
}
