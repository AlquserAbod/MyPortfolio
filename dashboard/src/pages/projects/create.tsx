"use client";

import TinyMCEEditor from "@/components/TinyEditor/tinyEditor";
import { Category, Project } from "@/interfaces";
import {   CloudUpload } from "@mui/icons-material";
import { Autocomplete, Box, TextField, Grid, Typography, Alert, Button } from "@mui/material";
import { Create, useAutocomplete } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import Flmngr from "flmngr";
import { useState, useRef } from "react";
import { Controller } from "react-hook-form";
import DOMPurify from 'dompurify';


export function ProjectCreate() {
  const {
    saveButtonProps,
    refineCore: { formLoading },
    register,
    formState: { errors },
    setValue,
    control,
    trigger
  } = useForm<Project>({
    refineCoreProps: {
      resource: "projects",
      action: "create",
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const { autocompleteProps } = useAutocomplete<Category>({
    resource: "categories",
  });

  const [mainImageURL, setMainImageUrl] = useState<string | null>(null);

  const [projectImagesUrl, setProjectImagesUrl] = useState<string[]>([]);


  const enEditorRef = useRef(null);
  const trEditorRef = useRef(null);
  const arEditorRef = useRef(null);

  return (
    <Create isLoading={formLoading} saveButtonProps={saveButtonProps} >
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="true"
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
        <Box sx={{ display: 'flex', flexDirection: 'column' , justifyContent:"center", alignItems: "center", gap: 2, mt:2 }}>
          <Box sx={{ width: "50%", mt: 2, mb:2}}>
            <Button
              {...register("main_image", {
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
                    setValue('main_image', MainImageUrl, { shouldValidate: true });
                    setMainImageUrl(MainImageUrl);
                  },
                });
              }}
              color={errors.main_image ? 'error' : 'primary'}
            >
              Upload Main Image
            </Button>
          </Box>
            
            {mainImageURL && (
                <img
                  src={mainImageURL}
                  alt="Main Image"
                  width={150}
                  height={150}
                />
            )}
        </Box>

        {/* Project images field */}
        <Box mt={2} sx={{ display: 'flex', flexDirection: 'column' , justifyContent:"center", alignItems: "center", gap: 2, mt:2 }}>
          <Box sx={{ width: "50%", mt: 2, mb:2}}>
            <Button
              {...register("project_images", {
                required: "This field is required",
              })}
              component="label"
              size="large"
              variant="contained"
              fullWidth
              tabIndex={-1}
              startIcon={<CloudUpload />}
              onClick={() => {
                Flmngr.open({
                  isMultiple: true,
                  onFinish: (files) => {
                    const ImageUrls = files.map((value) => value.url);
                    setValue('project_images', ImageUrls, { shouldValidate: true });
                    setProjectImagesUrl(ImageUrls);
                  },
                });
              }}
              color={errors.project_images ? 'error' : 'primary'}
            >
              Upload Project Images
            </Button>
          </Box>

          <Grid 
            container 
            spacing={2} 
            mt={2} 
            justifyContent="center" 
            alignItems="center"
          >
            {projectImagesUrl.map((image, index) => (
              <Grid item xs={4} key={index}>
                <Box display="flex" justifyContent="center">
                  <img src={image} alt={`Project ${index + 1}`} style={{ maxWidth: '40%' }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>


      <Typography variant="h6" mt={2}>Description (EN)</Typography>
      <Box mt={2} mb={2}>

            <TinyMCEEditor
              {...register("description_en", {
                required: "This field is required",
              })}
              ref={enEditorRef}
              error={!!errors.description_en}
              helperText={(errors as any).description_en?.message}
              onChange={(content: string) => {
                const sanitizedContent = DOMPurify.sanitize(content);
                  
                setValue('description_en',sanitizedContent)
                if(errors.description_en) {
                  trigger("description_en")
                }
            }}
            />
      </Box>

      <Typography variant="h6" mt={2}>Description (Tr)</Typography>
      <Box mt={2} mb={2}>

            <TinyMCEEditor
              {...register("description_tr", {
                required: "This field is required",
              })}
              ref={trEditorRef}
              error={!!errors.description_tr}
              helperText={(errors as any).description_tr?.message}
              onChange={(content: string) => {
                const sanitizedContent = DOMPurify.sanitize(content);
                  
                setValue('description_tr',sanitizedContent)
                if(errors.description_tr) {
                  trigger("description_tr")
                }
              }}
            />
      </Box>


      <Typography variant="h6" mt={2}>Description (Ar)</Typography>
      <Box mt={2} mb={2}>

            <TinyMCEEditor
              {...register("description_ar", {
                required: "This field is required",
              })}
              ref={arEditorRef}
              error={!!errors.description_ar}
              helperText={(errors as any).description_ar?.message}
              onChange={(content: string) => {
                const sanitizedContent = DOMPurify.sanitize(content);
                  
                setValue('description_ar',sanitizedContent)
                if(errors.description_ar) {
                  trigger("description_ar")
                }
              }}
            />
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
