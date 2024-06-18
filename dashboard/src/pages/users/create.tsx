"use client";

import { Box, TextField, IconButton, InputAdornment, Button, Alert, Typography } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useState, MouseEvent } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { User }  from '@/interfaces'; 
import { CloudUpload } from "@mui/icons-material";
import Flmngr from "flmngr";



export function UserCreate() {

  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    control,
    formState: { errors },
    setValue
  } = useForm<User>({
    refineCoreProps: {
      resource: "users",
      action: "create",
    }
  });

  const [showPassword, setShowPassword] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);


  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps} >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >

        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2, width: "100%" }}>
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
    </Create>
  );
}
