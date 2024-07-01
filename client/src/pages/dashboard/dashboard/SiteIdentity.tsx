import { Box, Button, TextField, styled } from "@mui/material"
import { useEffect, useState } from "react"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import readImageFile from "@/utils/readers/readImageFile";
import LanguageSelector from "@/components/form/LanguageSelector";
import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/siteIdentity`,
  headers: {
    'Content-Type': 'multipart/form-data',
  }
});

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


const SiteIdentity = () => {
  
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [nobgLogoPreview, setNobgLogoPreview] = useState<string | null>(null);

  const [selectedLanguage, setSelectedLanguage] = useState<string>('tr');
  const [slogans, setSlogans] = useState<{ [key: string]: string }>({ tr: '', ar: '', en: '' });
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [nobgLogoFile, setNobgLogoFile] = useState<File | null>(null);
  const [jobTitles, setJobTitles] = useState<{ [key: string]: string }>({ tr: '', ar: '', en: '' });
  const [initialData, setInitialData] = useState<any>(null); 
  const [isDirty, setIsDirty] = useState<boolean>(false); 


  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await axiosInstance.get('/');
      if (response.status !== 200) {
        throw new Error('Failed to fetch data');
      }
      const data = response.data;

      // Store initial data fetched from API
      setInitialData(data);

      setLogoPreview(data.logoUrl);
      setNobgLogoPreview(data.nobgLogoUrl);
      setSlogans(data.slogan);
      setJobTitles(data.jobTitle);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleResetChanges = () => {
    // Reset all fields to initial data fetched from API
    if (initialData) {
      setLogoPreview(initialData.logoUrl);
      setNobgLogoPreview(initialData.nobgLogoUrl);
      setSlogans(initialData.slogan);
      setJobTitles(initialData.jobTitle);
    }
    setIsDirty(false); 
  };

  const handleSubmitChanges = async () => {

    try {
      const formData = new FormData();

      if (logoFile) {
        formData.append('logo', logoFile);
      }

      if (nobgLogoFile) {
        formData.append('nobgLogo', nobgLogoFile);
      }
      formData.append('slogans', JSON.stringify(slogans)); 
      formData.append('jobTitles',  JSON.stringify(jobTitles));
  
      const response = await axiosInstance.post('/', formData);
      setIsDirty(false); // Reset isDirty after successful submission
      console.log('Changes saved successfully!', response.data);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };




  const handleUploadLogo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    setLogoFile(image);
    setLogoPreview(await readImageFile(image));
    setIsDirty(true); // Set isDirty to true when changes are made
  };

  const handleUploadNobgLogo = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    setNobgLogoFile(image);
    setNobgLogoPreview(await readImageFile(image));
    setIsDirty(true); // Set isDirty to true when changes are made
  };

  const handleSloganChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlogans({ ...slogans, [selectedLanguage]: e.target.value });
    setIsDirty(true); // Set isDirty to true when changes are made
  };

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitles({ ...jobTitles, [selectedLanguage]: e.target.value });
    setIsDirty(true); // Set isDirty to true when changes are made
  };

  return (
    <Box display={'flex'}  flexDirection={'column'} alignItems={"center"} flexWrap={'wrap'} gap={5}>

      <Box display={'flex'} gap={'10px'} width={"100%"} flexWrap={'wrap'}>
        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2, width: "100%",  flexDirection: 'column'}}>
          <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon /> }
            >
              Upload Logo
              <VisuallyHiddenInput 
                type="file"
                accept="image/*"
                onChange={handleUploadLogo}
              />
          </Button>

          {logoPreview && (
            <Box>
              <img
                  src={logoPreview}
                  alt="Profile Preview"
                  width={200}
                  style={{
                    border: "1px solid $grey",
                    padding: "2px",
                    borderRadius: "10px"
                  }}
              />
            </Box>
          )}
        </Box>

        <Box  sx={{ display: 'flex', alignItems: 'center', gap: 2, width: "100%",  flexDirection: 'column'}}>
          <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon /> }
            >
              Upload transparent Logo
              <VisuallyHiddenInput 
                type="file"
                accept="image/*"
                onChange={handleUploadNobgLogo}
              />
          </Button>

          {nobgLogoPreview && (
            <Box>
              <img
                  src={nobgLogoPreview}
                  alt="Profile Preview"
                  width={200}
                  style={{
                    border: "1px solid $grey",
                    padding: "2px",
                    borderRadius: "10px"
                  }}
              />
            </Box>
          )}
        </Box>
      </Box>


      
      <Box display={'flex'} flexDirection={"column"} gap={'10px'} alignItems={'center'} width={"100%"}>
        <Box sx={{ width: '50%'}}>
          <LanguageSelector language={selectedLanguage} setLanguage={setSelectedLanguage} />

        </Box>
        <TextField
          label={`Slogan (${selectedLanguage.toUpperCase()})`}
          variant="outlined"
          sx={{ width: '50%'}}
          value={slogans[selectedLanguage]}
          onChange={handleSloganChange}
        />
        <TextField
          label={`Job Title (${selectedLanguage.toUpperCase()})`}
          variant="outlined"
          sx={{ width: '50%'}}
          value={jobTitles[selectedLanguage]}
          onChange={handleJobTitleChange}
        />
      </Box>


      {isDirty && (
        <Box display={'flex'} justifyContent={'space-around'}  width={'100%'}>
          <Button variant="contained" color="primary" onClick={handleSubmitChanges} sx={{width:'30%'}} >
            Submit Changes
          </Button>

          <Button variant="outlined" color="secondary" onClick={handleResetChanges} sx={{width:'30%'}}>
            Reset Changes
          </Button>

        </Box>
      )}
    </Box>
  )
}

export default SiteIdentity
