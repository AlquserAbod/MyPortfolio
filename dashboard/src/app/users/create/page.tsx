"use client";

import { Box, TextField, IconButton, InputAdornment } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useState, MouseEvent, BaseSyntheticEvent, FormEvent } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { SubmitHandler,FieldValues } from "react-hook-form";
import { readImageFile }  from '../../../utils/readImageFile'; 
import Image from 'next/image'; 

interface UserFormInputs {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirm: string;
  profile_pic?: File;
}

export default function UserCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<UserFormInputs>({
    refineCoreProps: {
      resource: "users",
      action: "create",
      meta: {
        headers: {
          'Content-Type': `multipart/form-data`,
        }
      }
    }
  });

  const [showPassword, setShowPassword] = useState(false);
  const [selectedProfilePic, setSelectedProfilePic] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);


  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

  const handleButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    
    handleSubmit(onSubmit)(event);
  };


  saveButtonProps.onClick = handleButtonClick;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const { password_confirm, profile_pic, ...rest } = data; // Exclude password_confirm and profile_pic
    const formData = new FormData();
    
    formData.append('first_name', rest.first_name);
    formData.append('last_name', rest.last_name);
    formData.append('email', rest.email);
    formData.append('password', rest.password);
    
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
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps} >
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
                <Image
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
        <TextField
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
          error={!!errors.password}
          helperText={(errors as any).password?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          {...register("password_confirm", {
            required: "This field is required",
            validate: value =>
              value === control._formValues.password || "Passwords do not match",
          })}
          error={!!errors.password_confirm}
          helperText={(errors as any).password_confirm?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type={showPassword ? "text" : "password"}
          label="Confirm Password"
          name="password_confirm"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

      </Box>
    </Create>
  );
}
