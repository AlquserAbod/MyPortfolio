"use client";

import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { BaseSyntheticEvent, FormEvent, useEffect, useState } from "react";
import { SubmitHandler,FieldValues } from "react-hook-form";

import readImageFile   from '@/utils/readers/readImageFile'; 

export function UserEdit() {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading, onFinish },
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      resource: "users",
      action: "edit",
      meta: {
        headers: {
          'Content-Type': `multipart/form-data`,
        }
      }
    }
  });


  const user = queryResult?.data?.data;

  const [selectedProfilePic, setSelectedProfilePic] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);


  useEffect(() => {
    if (user && user.profile_pic) {
      setImagePreview(user.profile_pic);
    }
  }, [user]);


  const handleButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    
    handleSubmit(onSubmit)(event);
  };


  saveButtonProps.onClick = handleButtonClick;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const {  ...rest } = data; // Exclude password_confirm and profile_pic
    const formData = new FormData();
    
    formData.append('first_name', rest.first_name);
    formData.append('last_name', rest.last_name);
    formData.append('email', rest.email);
    
    if (selectedProfilePic ) {
      formData.append('profile_pic', selectedProfilePic);
    }

    onFinish(formData)
  
  };

  const handleFileChange = async (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setSelectedProfilePic(file);
      try {
        const imageUrl = await readImageFile(file);
        setImagePreview(imageUrl);
      } catch (error) {
        console.error("Error reading image file", error);
      }
    }
  };

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >

        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2, width: "100%" }}>
            <TextField
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="file"
              defaultValue={null} // Set initial value to null
              label="Profile Picture"
              inputProps={{ accept: "image/*", onChange: (e) => handleFileChange(e) }}
            />
            {imagePreview && (
              <Box>
                <img
                    src={imagePreview}
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
      </Box>
    </Edit>
  );
}
