"use client";

import { Box, TextField, Button, Alert, Typography } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { CloudUpload } from "@mui/icons-material";
import { useEffect, useState } from "react";
import Flmngr from "flmngr";
import { useParams } from "react-router-dom";

export function UserEdit() {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    setValue,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      id: useParams()['id'],
      resource: "users",
      action: "edit",
    }
  });

  const user = queryResult?.data?.data;

  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    if (user && user.profile_pic) {
      setImageUrl(user.profile_pic);
    }
  }, [user]);

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: "100%" }}>
          <Button
            {...register('profile_pic', { required: "This field is required"})}
            component="label"
            size="large"
            fullWidth
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUpload />}
            onClick={() => {
              Flmngr.open({
                isMultiple: false,
                onFinish: (files) => {
                  const imageUrl = files[0].url;
                  setValue('profile_pic', imageUrl, { shouldValidate: true });
                  setImageUrl(imageUrl);
                },
              });
            }}
            color={errors.profile_pic ? 'error' : 'primary'} >
            Upload Profile
          </Button>

          {imageUrl && (
            <Box>
              <img
                  src={imageUrl}
                  alt="Profile Preview"
                  width={150}
                  height={150}
                  style={{ borderRadius: '50%' }}
              />
            </Box>
          )}
        </Box>

        <TextField
          {...register("first_name", {
            required: "This field is required",
          })}
          error={!!errors.first_name}
          helperText={(errors as any).first_name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="First Name"
          name="first_name"
        />
        <TextField
          {...register("last_name", {
            required: "This field is required",
          })}
          error={!!errors.last_name}
          helperText={(errors as any).last_name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Last Name"
          name="last_name"
        />

        <TextField
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          error={!!errors.email}
          helperText={(errors as any).email?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="email"
          label="Email"
          name="email"
        />

        
        {Object.keys(errors).length > 0 && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {Object.entries(errors).map(([field, error], index) => (
              <Typography key={index}>
                {(error as any).message === 'This field is required' ? `The ${field} field is required` : (error as any).message}
              </Typography>
            ))}
          </Alert>
        )}
      </Box>
    </Edit>
  );
}
