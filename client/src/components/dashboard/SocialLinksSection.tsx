import { SocialLinks } from "@/interfaces";
import { Box, CircularProgress, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, FormControl, FormHelperText } from "@mui/material";
import { useEffect, useState } from "react";
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/social-links`,
});

const SocialLinksSection = () => {

  const [sociallinks, setSociallinks] = useState<SocialLinks | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState<{ active: boolean, key: keyof SocialLinks | null }>({ active: false, key: null });
  const [tempLinkValue, setTempLinkValue] = useState<string>("");
  const [validationErrors, setValidationErrors] = useState<{ [key in keyof SocialLinks]?: string }>({});

  useEffect(() => {
    const fetchSocialLinks = async () => {
        try {
          const response = await axiosInstance.get('');
          setSociallinks(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching Social Links:', error);
          setLoading(false);
        }
      };
  
      fetchSocialLinks();
  }, [editMode]);

  if (loading) {
    return <CircularProgress />;
  }

  const handleLinkClick = (key: keyof SocialLinks) => {
    setTempLinkValue(sociallinks![key]);
    setEditMode({ active: true, key });
    clearValidationErrors();
  };

  const handleSaveLink = async () => {
    if (editMode.key && sociallinks) {
      if (validateFields()) {
        try {
          await axiosInstance.put('', {
            [editMode.key]: tempLinkValue
          });
          console.log('Link updated successfully!');
        } catch (error) {
          console.error('Error updating link:', error);
        } finally {
          setEditMode({ active: false, key: null });
        }
      }
    }
  };

  const handleCancelEdit = () => {
    setEditMode({ active: false, key: null });
    setTempLinkValue("");
    clearValidationErrors();
  };

  const handleBlur = () => {
    handleSaveLink();
  };

  const validateFields = () => {
    let valid = true;
    const errors: { [key in keyof SocialLinks]?: string } = {};

    // Validate URL format
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(tempLinkValue)) {
      errors[editMode.key as keyof SocialLinks] = 'Invalid URL format';
      valid = false;
    }

    // Validate required fields
    if (!tempLinkValue) {
      errors[editMode.key as keyof SocialLinks] = 'this field is required';
      valid = false;
    }

    setValidationErrors(errors);
    return valid;
  };

  const clearValidationErrors = () => {
    setValidationErrors({});
  };

  const socialLinkRows = sociallinks ? Object.keys(sociallinks).map((key) => ({
    name: key.charAt(0).toUpperCase() + key.slice(1),
    link: sociallinks[key as keyof SocialLinks]
  })) : [];

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>Your Social Links:</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Social Name</TableCell>
              <TableCell>Social Link</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {socialLinkRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>
                  {editMode.active && editMode.key === row.name.toLowerCase() as keyof SocialLinks ? (
                    <FormControl fullWidth error={!!validationErrors[editMode.key]}>
                      <TextField
                        value={tempLinkValue}
                        onChange={(e) => setTempLinkValue(e.target.value)}
                        fullWidth
                        onBlur={handleBlur}
                        autoFocus // Auto focus on the TextField when in edit mode
                        onKeyDown={(e) => {
                          if (e.key === 'Escape') {
                            handleCancelEdit();
                          }
                        }}
                      />
                      <FormHelperText>{validationErrors[editMode.key]}</FormHelperText>
                    </FormControl>
                  ) : (
                    <Typography
                      onClick={() => handleLinkClick(row.name.toLowerCase() as keyof SocialLinks)}
                      style={{ cursor: 'pointer', textDecoration: 'underline' }}
                    >
                      {row.link}
                    </Typography>
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.open(row.link, "_blank")}
                  >
                    Go to {row.name}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default SocialLinksSection;
