import { Box, Button, MenuItem, Select, TextField, styled } from "@mui/material"
import { useState } from "react"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import readImageFile from "@/utils/readers/readImageFile";
import LanguageSelector from "@/components/form/LanguageSelector";

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
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [nobgLogoUrl, setNobgLogoUrl] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>('tr');
  const [slogans, setSlogans] = useState<{ [key: string]: string }>({ tr: '', ar: '', en: '' });
  const [jobTitles, setJobTitles] = useState<{ [key: string]: string }>({ tr: '', ar: '', en: '' });

  const handleUploadLogo = async (e : any) => {
    const image = e.target.files[0];
    setLogoUrl(await readImageFile(image))
  };

  const handleUploadNobgLogo = async (e : any) => {
    const image = e.target.files[0];
    setNobgLogoUrl(await readImageFile(image))
  };

  const handleSloganChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlogans({ ...slogans, [selectedLanguage]: e.target.value });
  };

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJobTitles({ ...jobTitles, [selectedLanguage]: e.target.value });
  };

  return (
    <Box display={'flex'} justifyContent={"space-between"} alignItems={"center"} pr={5} pl={5}>

      <Box display={'flex'} flexDirection={"column"} gap={'10px'} width={"100%"}>
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

          {logoUrl && (
            <Box>
              <img
                  src={logoUrl}
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

          {nobgLogoUrl && (
            <Box>
              <img
                  src={nobgLogoUrl}
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


      
      <Box display={'flex'} flexDirection={"column"} gap={'10px'} width="100%">
        <LanguageSelector language={selectedLanguage} setLanguage={setSelectedLanguage} />
        <TextField
          label={`Slogan (${selectedLanguage.toUpperCase()})`}
          variant="outlined"
          fullWidth
          value={slogans[selectedLanguage]}
          onChange={handleSloganChange}
        />
        <TextField
          label={`Job Title (${selectedLanguage.toUpperCase()})`}
          variant="outlined"
          fullWidth
          value={jobTitles[selectedLanguage]}
          onChange={handleJobTitleChange}
        />
      </Box>
    </Box>
  )
}

export default SiteIdentity
