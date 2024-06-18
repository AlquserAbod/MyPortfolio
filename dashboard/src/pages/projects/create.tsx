"use client";

import TinyMCEEditor from "@/components/TinyEditor/tinyEditor";
import { Category, Project } from "@/interfaces";
import readImageFile from "@/utils/readers/readImageFile";
import {  AddPhotoAlternate, PermMedia } from "@mui/icons-material";
import { Autocomplete, Box, TextField, Grid, Typography } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { MuiFileInput } from "mui-file-input";
import { useState, BaseSyntheticEvent } from "react";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";


export function ProjectCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading,onFinish },
    register,
    formState: { errors },
    setValue,
    handleSubmit,
    control,
  } = useForm<Project>({
    refineCoreProps: {
      resource: "projects",
      action: "create",
      meta: {
        headers: {
          'Content-Type': `multipart/form-data`,
        }
      }
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const { autocompleteProps } = useAutocomplete<Category>({
    resource: "categories",
  });

  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);

  const [projectImages, setProjectImages] = useState<File[]>([]);
  const [projectImagesPreview, setProjectImagesPreview] = useState<string[]>([]);


  
  const [enEditorValue, setEnEditorValue] = useState('');
  const [trEditorValue, setTrEditorValue] = useState('');
  const [arEditorValue, setArEditorValue] = useState('');


  const handleMainImageChange = async (file : File | null) => {
    if (file) {
      setMainImage(file);
      try {
        const imageUrl = await readImageFile(file);
        setMainImagePreview(imageUrl)
      } catch (error) {
        console.error("Error reading image file", error);
      }
    }
  };

  const handleProjectImagesChange = async (files : File[]) => {
    if (files.length > 0) {
      setProjectImages(files);
      const imagePromises = files.map(async file => await readImageFile(file));
      const images = await Promise.all(imagePromises); // Wait for all promises to resolve
      setProjectImagesPreview(images);
    }
  };

  const handleButtonClick = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    
    handleSubmit(onSubmit)(event);
  };

  saveButtonProps.onClick = handleButtonClick;

  const onSubmit: SubmitHandler<FieldValues> = async (data : FieldValues) => {
    
    const formData = new FormData();


    // Append other form data fields to the FormData
    Object.keys(data).forEach(key => { 
      formData.append(key, data[key]);
    });

    // Iterate through project_images array
    if(projectImages) {
        projectImages.forEach((file, index) => {
          formData.append('project_images', file);
        });
      }
  
      if(mainImage) {
        formData.append('main_image', mainImage)
      } 

    onFinish(formData);
  };

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps} >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="true"
        onSubmit={handleSubmit(onSubmit)}
      >
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

        {/* Category field */}
        <Controller
          name="category"
          control={control}
          defaultValue={null}
          rules={{ required: "This field is required" }}
          render={({ field }) => (
            <Autocomplete
              {...field}
              {...autocompleteProps}
              getOptionLabel={(item: Category) => item.title_en || ''}
              isOptionEqualToValue={(option: Category, value: Category) => {
                return option._id === value._id
                
              }}
              onChange={(_, newValue) => {
                setSelectedCategory(newValue);
                field.onChange(newValue?._id || '');
              }}
              value={selectedCategory}
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
          )}
        />


        <TextField
          {...register("visit_url", {
            required: "This field is required",
          })}
          error={!!errors.visit_url}
          helperText={(errors as any).visit_url?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="url"
          label="Visit URL"
          name="visit_url"
        />

        <TextField
          {...register("github_url", {
            required: "This field is required",
          })}
          error={!!errors.github_url}
          helperText={(errors as any).github_url?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="url"
          label="GitHub URL"
          name="github_url"
        />

        <TextField
          {...register("short_description_en", {
            required: "This field is required",
          })}
          error={!!errors.short_description_en}
          helperText={(errors as any).short_description_en?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Short Description (EN)"
          name="short_description_en"
        />

        <TextField
          {...register("short_description_tr", {
            required: "This field is required",
          })}
          error={!!errors.short_description_tr}
          helperText={(errors as any).short_description_tr?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Short Description (TR)"
          name="short_description_tr"
        />

        <TextField
          {...register("short_description_ar", {
            required: "This field is required",
          })}
          error={!!errors.short_description_ar}
          helperText={(errors as any).short_description_ar?.message}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}

          type="text"
          label="Short Description (AR)"
          name="short_description_ar"
        />

        {/* Main image field */}
        <Box mt={4}>

          <Controller
            name="main_image"
            control={control}
            rules={{ required: mainImage == null  ? "This field is required" : false }}
            render={({ field, fieldState }) => (
              <MuiFileInput
                {...field}
                label="Main Image"
                placeholder="select a image"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                value={mainImage}
                onChange={handleMainImageChange}
                InputProps={{
                  inputProps: { accept: 'image/*', },
                  startAdornment: <AddPhotoAlternate />
                }}
              />
            )}
          />

          {mainImagePreview && (
            <Box mt={2} mb={2}>
              <img src={mainImagePreview} alt="Main Image" style={{ maxWidth: '30%' }} />
            </Box>
          )}

        </Box>

        {/* Project images field */}

        <Box mt={4}>
          <Controller
            name="project_images"
            control={control}
            rules={{ required: projectImages.length  <= 0 ? "This field is required" : false }}
            render={({ field, fieldState }) => (
              <MuiFileInput
              
                {...field}
                label="Project Images"
                placeholder="select a images"
                error={fieldState.invalid}
                helperText={fieldState.error?.message}
                value={projectImages}
                multiple={true}
                onChange={handleProjectImagesChange}
                name="project_images"
                InputProps={{
                  inputProps: { accept: 'image/*' },
                  startAdornment: <PermMedia />
                }}
              />
            )}
          />

          <Grid container spacing={2} mt={2}>
            {projectImagesPreview.map((image, index) => (
              <Grid item xs={4} key={index}>
                <img src={image} alt={`Project ${index + 1}`} style={{ maxWidth: '60%' }} />
              </Grid>
            ))}
          </Grid>
        </Box>


      <Typography variant="h6" mt={2}>Description (EN)</Typography>
      <Box mt={2} mb={2}>

            <TinyMCEEditor
              apiKey={"dm50xclxghr3g68ic64yksj2ltp9sj62ipwy1pxceoi48mrw"}
              // error={!!errors.description_en}
              // helperText={(errors as any).description_en?.message}
              onChange={(content: string) => {
                setEnEditorValue(content);
              }}
            />
      </Box>

      </Box>
    </Create>
  );
}
