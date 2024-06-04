"use client";

import { Category } from "@/interfaces";
import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";

export function CategoryEdit() {
  const {
    saveButtonProps,
    refineCore: {  formLoading },
    register,
    formState: { errors },
  } = useForm<Category>({
    refineCoreProps: {
      resource: "categories",
      action: "edit",
    }
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >

          <TextField
            {...register("title_en", {
              required: "This field is required",
            })}
            error={!!errors.title_en}
            helperText={(errors as any).title_en?.message}
            margin="normal"
            fullWidth
            InputLabelProps={{ shrink: true }}
            type="text"
            label="Title (English)"
            name="title_en"
          />

          <TextField
            {...register("title_tr", {
              required: "This field is required",
            })}
            error={!!errors.title_tr}
            helperText={(errors as any).title_tr?.message}
            margin="normal"
            fullWidth
            InputLabelProps={{ shrink: true }}
            type="text"
            label="Title (Turkish)"
            name="title_tr"
          />

          <TextField
            {...register("title_ar", {
              required: "This field is required",
            })}
            error={!!errors.title_ar}
            helperText={(errors as any).title_ar?.message}
            margin="normal"
            fullWidth
            InputLabelProps={{ shrink: true }}
            type="text"
            label="Title (Arabic)"
            name="title_ar"
          />
        
      </Box>
    </Edit>
  );
}
