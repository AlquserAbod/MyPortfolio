"use client";

import { Autocomplete, Box, Slider, TextField, Typography } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { BaseSyntheticEvent, FormEvent, useEffect, useState } from "react";
import { SubmitHandler,FieldValues } from "react-hook-form";
import { useAutocomplete } from "@refinedev/mui";

import { readImageFile }  from '@/utils/readImageFile'; 
import { Category } from "@/interfaces";
import { Skills } from "@/interfaces/Skills";


export function SkillEdit() {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading, onFinish },
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      resource: "skills",
      action: "edit",
      meta: {
        headers: {
          'Content-Type': `multipart/form-data`,
        }
      }
    }
  });


  const skill = queryResult?.data?.data;

  const [selectedIcon, setSelectedIcon] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [iconPreview, setIconPreview] = useState<string | null>(null);


  useEffect(() => {
    
    if (skill && skill.icon) {
      setIconPreview(skill.icon);
    }
    if(skill && skill.category) {
      setSelectedCategory(skill.category);
    }
  }, [skill]);


  const handleButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    
    handleSubmit(onSubmit)(event);
  };


  saveButtonProps.onClick = handleButtonClick;

  const onSubmit: SubmitHandler<FieldValues> = async (data: FieldValues) => {
    const { ...rest } = data; // Exclude password_confirm and profile_pic
    const formData = new FormData();
    
    formData.append('name', rest.name);
    formData.append('proficiency', rest.proficiency);

    if(selectedCategory) {
      formData.append('category', selectedCategory?._id);
    }

    
    if (selectedIcon) {
      formData.append('icon', selectedIcon);
    }
    
    onFinish(formData)
  
  };

  const handleFileChange = async (e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setSelectedIcon(file);
      try {
        const imageUrl = await readImageFile(file);
        setIconPreview(imageUrl);
      } catch (error) {
        console.error("Error reading image file", error);
      }
    }
  };

  const { autocompleteProps } = useAutocomplete<Category>({
    resource: "categories",
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps} >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="true"
        onSubmit={handleSubmit(onSubmit)}
      >

          <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2, width: "100%" }}>
            <TextField
              margin="normal"
              fullWidth
              InputLabelProps={{ shrink: true }}
              type="file"
              label="Icon"
              inputProps={{ 
                accept: "image/*", 
                onChange: (e) => handleFileChange(e),
              }}
            />
            {iconPreview && (
              <Box>
                <img
                    src={iconPreview}
                    alt="Profile Preview"
                    width={150}
                    height={150}
                    style={{ borderRadius: '50%' }}
                />
              </Box>
            )}
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
                {...register("category", { required: "This field is required" })}
                {...autocompleteProps}
                getOptionLabel={(item: any) => item.title_en}
                value={selectedCategory} // Use a state variable to control the selected option
                onChange={(event, newValue) => {
                  setSelectedCategory(newValue); // Update the selected option
                }}
                isOptionEqualToValue= {(option, value)  => {
                  return option._id == value._id;
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
      </Box>
    </Edit>
  );
}
