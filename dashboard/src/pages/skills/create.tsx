"use client";

import { Box, TextField, Slider, Typography, Autocomplete, Button, Alert } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useState, BaseSyntheticEvent } from "react";
import { SubmitHandler, FieldValues } from "react-hook-form";
import { useAutocomplete } from "@refinedev/mui";
import { Skills } from "@/interfaces/Skills";
import { Category } from "@/interfaces";
import { CloudUpload } from "@mui/icons-material";
import Flmngr from "flmngr";

export function SkillCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    handleSubmit,
    register,
    formState: { errors },
    setValue,
    clearErrors
  } = useForm<Skills>({
    refineCoreProps: {
      resource: "skills",
      action: "create",
      meta: {
        headers: {
          'Content-Type': `multipart/form-data`,
        }
      }
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  const handleButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    handleSubmit(onSubmit)(event);
  };

  saveButtonProps.onClick = handleButtonClick;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    onFinish(data);
  };

  const { autocompleteProps } = useAutocomplete<Category>({
    resource: "categories",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        autoComplete="true"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, width: '100%' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, width: '100%' }}>
            <Button
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
                    const IconUrl = files[0].url;
                    setValue('icon', IconUrl, { shouldValidate: true });
                    setIconUrl(IconUrl);
                  },
                });
              }}
              color={errors.icon ? 'error' : 'primary'}
            >
              Upload Icon
            </Button>
            
            {iconUrl && (
              <Box>
                <img
                  src={iconUrl}
                  alt="Profile Preview"
                  width={150}
                  height={150}
                />
              </Box>
            )}
          </Box>
        </Box>

        <TextField
          {...register("name", {
            required: "This field is required",
          })}
          error={!!errors.name}
          helperText={(errors as any).name?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Name"
          name="name"
        />

        <Autocomplete
          {...register("category", { required: "This field is required",     setValueAs: () => selectedCategory?._id // Ensure setValueAs correctly assigns the ID
          })}
          {...autocompleteProps}
          getOptionLabel={(item: any) => item.title_en}
          value={selectedCategory}
          onChange={(event, newValue) => {
            if (newValue) {
              setSelectedCategory(newValue);
              setValue('category', newValue._id); // Ensure to use _id property directly
              if (errors.category) {
                clearErrors("category"); // Clear error message if valid selection is made
              }
            } 
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              label="Category"
              name="category"
              required
              placeholder="Select a category"
              error={!!errors.category}
              helperText={(errors as any).category?.message}
            />
          )}
        />

        <Box sx={{ mt: 5 }}>
          <Typography variant="body1" component="label" htmlFor="proficiency">
            Proficiency (%)
          </Typography>
          <Box sx={{ mr: 20, ml: 20 }}>
            <Slider
              {...register("proficiency", { required: "This field is required", min: 0, max: 100 })}
              valueLabelDisplay="auto"
              aria-labelledby="proficiency-slider"
              step={1}
              marks={[
                { value: 0, label: "0%" },
                { value: 25, label: "25%" },
                { value: 50, label: "50%" },
                { value: 75, label: "75%" },
                { value: 100, label: "100%" }
              ]}
              name="proficiency"
              min={0}
              max={100}
            />
          </Box>
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
