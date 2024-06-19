"use client";

import { Certificast } from "@/interfaces";
import { CloudUpload } from "@mui/icons-material";
import { Alert, Box, Button, Typography } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import Flmngr from "flmngr";
import { useState } from "react";

export function CertificastCreate() {

  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    formState: { errors },
    setValue
  } = useForm<Certificast>({
    refineCoreProps: {
      resource: "certificates",
      action: "create",
    }
  });

  const [certificastImageURL, setCertificastImageURL] = useState<string | null>(null);

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps} >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        

        <Box sx={{ display: 'flex', flexDirection: 'column' , justifyContent:"center", alignItems: "center", gap: 2, mt:2 }}>
          <Box sx={{ width: "50%", mt: 2, mb:2}}>
            <Button
              {...register("image", {
               required: "This field is required",
              })}
              fullWidth
              component="label"
              size="large"
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUpload />}
              onClick={() => {
                Flmngr.open({
                  isMultiple: false,
                  onFinish: (files) => {
                    const MainImageUrl = files[0].url;
                    setValue('image', MainImageUrl, { shouldValidate: true });
                    setCertificastImageURL(MainImageUrl);
                  },
                });
              }}
              color={errors.image ? 'error' : 'primary'}
            >
              Upload certificast  Image
            </Button>
          </Box>
            
            {certificastImageURL && (
                <img
                  src={certificastImageURL}
                  alt="Certificast Image"
                  width={"40%"}
                />
            )}
        </Box>



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
