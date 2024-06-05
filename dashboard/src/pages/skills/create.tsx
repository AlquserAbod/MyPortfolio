"use client";

import { Box, TextField, Slider,Typography, Autocomplete } from "@mui/material";
import { Create } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useState, BaseSyntheticEvent, FormEvent } from "react";
import { SubmitHandler,FieldValues } from "react-hook-form";
import { readImageFile }  from '@/utils/readImageFile'; 
import { useAutocomplete } from "@refinedev/mui";
import { Skills } from "@/interfaces/Skills";
import { Category } from "@/interfaces";


export function SkillCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading, onFinish },
    handleSubmit,
    register,
    formState: { errors },
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

  
  const [selectedIcon, setSelectedIcon] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [iconPreview, IconPreview] = useState<string | null>(null);



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
        IconPreview(imageUrl);
      } catch (error) {
        console.error("Error reading image file", error);
      }
    }
  };

  const { autocompleteProps } = useAutocomplete<Category>({
    resource: "categories",
  });

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps} >
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
              required
              inputProps={{ 
                accept: "image/*", 
                onChange: (e) => handleFileChange(e),
              }}
              error={!selectedIcon} 
              helperText={!selectedIcon  && "Please select an icon"} 
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
      </Box>
    </Create>
  );
}
