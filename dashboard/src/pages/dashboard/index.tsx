import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Box, Link } from '@mui/material';
import { Statistics, CategoryStatistics, CertificateStatistics, SkillStatistics, Skill, Category } from '@/interfaces';
import { ContactStatistics, ProjectStatistics, UserStatistics } from '@/interfaces';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/statistics`, 
});

const Dashboard: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistics>({
    categories: { totalCount: 0, categories: [] },
    certificates: { totalCount: 0, latestCertificate: null },
    skills: { totalCount: 0, skills: [] },
    projects: { totalCount: 0, latestProject: null },
    users: { totalCount: 0 },
    contacts: { totalContacts: 0, unreadContacts: 0 },
  });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const [
          categoriesResponse,
          certificatesResponse,
          skillsResponse,
          projectsResponse,
          usersResponse,
          contactsResponse,
        ] = await Promise.all([
          axiosInstance.get<CategoryStatistics>('/categories'),
          axiosInstance.get<CertificateStatistics>('/certificates'),
          axiosInstance.get<SkillStatistics>('/skills'),
          axiosInstance.get<ProjectStatistics>('/projects'),
          axiosInstance.get<UserStatistics>('/users'),
          axiosInstance.get<ContactStatistics>('/contacts'),
        ]);

        setStatistics({
          categories: categoriesResponse.data,
          certificates: certificatesResponse.data,
          skills: skillsResponse.data,
          projects: projectsResponse.data,
          users: usersResponse.data,
          contacts: contactsResponse.data,
        });

        
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };


    
    fetchStatistics();
    

  }, []);

  return null;
};

export default Dashboard;
