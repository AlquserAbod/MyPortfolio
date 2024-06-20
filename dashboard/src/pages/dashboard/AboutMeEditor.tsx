import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {
  CircularProgress,
} from '@mui/material';
import TinyMCEEditor from '@/components/TinyEditor/tinyEditor';
import tinymce from 'tinymce';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/about`,
});

const AboutMeEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const editorRef = useRef(null);

  useEffect(() => {
    const fetchStatistics = async () => {
        try {
            const response =  await axiosInstance.get('');
            setContent(response.data.aboutMe);
    
          
  
          setLoading(false);
        } catch (error) {
          console.error('Error fetching statistics:', error);
          setLoading(false);
        }
      };
  
      fetchStatistics();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <TinyMCEEditor
        ref={editorRef}
        initialValue={content} 
        onSave={async (content: string) => {
          await axiosInstance.put('',{aboutMe: content});      
        }} 
    />
  );
};

export default AboutMeEditor;
