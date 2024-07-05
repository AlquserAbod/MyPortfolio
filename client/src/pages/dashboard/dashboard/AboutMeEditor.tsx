import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  CircularProgress,
  Typography,
} from '@mui/material';
import TinyMCEEditor from '@/components/form/tinyEditor';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/about`,
});

const AboutMeEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAboutMe = async () => {
        try {
            const response =  await axiosInstance.get('');
            setContent(response.data.aboutMe);
    
          
  
          setLoading(false);
        } catch (error) {
          console.error('Error fetching About Me:', error);
          setLoading(false);
        }
      };
  
      fetchAboutMe();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Box>
      <Typography variant="h5" sx={{mb:2}}> About Me Section Content :</Typography>

      <Box sx={{ml:1}}>
        <TinyMCEEditor
            initialValue={content} 
            onSave={async (content: string) => {
              await axiosInstance.put('',{aboutMe: content});      
            }} 
        />
      </Box>
    </Box>
  );
};

export default AboutMeEditor;
