"use client";

import { Box, TextField } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
interface UserFormInputs {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirm: string;
  profile_pic?: File;
}

export default function CategoryCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    register,
    formState: { errors },
  } = useForm<UserFormInputs>({
    refineCoreProps: {
      resource: "categories",
      action: "create",
    }
  });


  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps} >
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
    </Create>
  );
}
