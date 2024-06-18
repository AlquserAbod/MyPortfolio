"use client";

import { Alert, Autocomplete, Box, Button, Slider, TextField, Typography } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useEffect, useState } from "react";
import { useAutocomplete } from "@refinedev/mui";

import { Category } from "@/interfaces";
import { CloudUpload } from "@mui/icons-material";
import Flmngr from "flmngr";
import { Skills } from "@/interfaces/Skills";
import { useParams } from "react-router-dom";


export function SkillEdit() {
  
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    formState: { errors },
    setValue,
    clearErrors
  } = useForm({
    
    refineCoreProps: {
      resource: "skills",
      action: "edit",
      id: useParams()['id'], // Set the id based on the query result
      meta: {
        headers: {
          'Content-Type': `multipart/form-data`,
        }
      }
    }
  });


  const skill = queryResult?.data?.data;

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [iconUrl, setIconUrl] = useState<string | null>(null);


  useEffect(() => {
    if (skill && skill.icon) {
      setIconUrl(skill.icon);
    }

    if(skill && skill.category) {
      setSelectedCategory(skill.category as Category);
    }

  }, [setValue, skill]);





  const { autocompleteProps } = useAutocomplete<Category>({ resource: "categories", });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps} >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="true"
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

            <input
              type="hidden"
              {...register('icon', { required: 'Icon field is required' })}
            />

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
            {...register("category", 
              { required: "This field is required", 
              setValueAs: () => selectedCategory?._id,
                
            })}
            {...autocompleteProps}
            getOptionLabel={(item: any) => item.title_en}
            isOptionEqualToValue={(option : Category, value: Category) =>  option._id == value._id}
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
            <Box sx={{ mr:20, ml: 20}}>
              <Slider
                {...register("proficiency", { required: "This field is required"})}
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
                defaultValue={skill?.proficiency } // Set the initial value here

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
    </Edit>
  );
}
