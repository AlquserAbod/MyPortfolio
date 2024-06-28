import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Link,
  CircularProgress,
  Divider,
} from '@mui/material';

import {
  Statistics,
  CategoryStatistics,
  CertificateStatistics,
  SkillStatistics,
  ProjectStatistics,
  UserStatistics,
  ContactStatistics,
} from '@/interfaces';
import styles from '@/styles/dashboard.module.css'; 

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/statistics`,
});

const StatisticsSection: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistics>({
    categories: { totalCount: 0, categories: [] },
    certificates: { totalCount: 0, latestCertificate: null },
    skills: { totalCount: 0, skills: [] },
    projects: { totalCount: 0, latestProject: null },
    users: { totalCount: 0 },
    contacts: { totalCount: 0, unreadContacts: 0 },
  });

  const [hasStatistics,setHasStatistics] = useState<boolean>(false);

  const [loading, setLoading] = useState(true);

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

        setHasStatistics(
          statistics.categories.totalCount + 
          statistics.certificates.totalCount + 
          statistics.skills.totalCount + 
          statistics.projects.totalCount +
          statistics.users.totalCount +
          statistics.contacts.totalCount > 0
        );
        setLoading(false);
      }
      catch (error) {
        console.error('Error fetching statistics:', error);
        setLoading(false);
      }
    };

    fetchStatistics();
  }, []);



  if (loading) {
    return <CircularProgress />;
  }

  {hasStatistics ? ( 
      <Box>
        <Grid container spacing={3}  alignItems={"stretch"} justifyContent={"space-evenly"}>
          {statistics.categories.totalCount > 0 ?? (
            <Grid item xs={12} md={6} lg={4}>
              <Card >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Categories
                  </Typography>
                  <Typography variant="body1">
                    Total Categories: {statistics.categories.totalCount}
                  </Typography>
                  <Box mt={2}>
                    <Typography variant="subtitle2">Top Categories:</Typography>
                    <ul style={{ listStyle:"none"}}>
                      {statistics.categories.categories.map((category) => (
                        <li className={styles.category} key={category.category?._id}>{category.category?.title_en} : <span className={styles.category_not}>({category.totalCount} project with this category) </span></li>
                      ))}
                    </ul>
                  </Box>
                  <Box mt={2}>
                    <Link href="/categories" color="primary">
                      View All Categories
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}

          {statistics.certificates.totalCount > 0 ?? (
            <Grid item xs={12} md={6} lg={4} >
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Certificates
                  </Typography>
                  <Typography variant="body1">
                    Total Certificates: {statistics.certificates.totalCount}
                  </Typography>
                  {statistics.certificates.latestCertificate && (
                    <Box mt={2}>
                      <Typography variant="subtitle2">Latest Certificate:</Typography>
                      <Typography variant="body2">
                        from "{statistics.certificates.latestCertificate.from}" Take in : (
                          
                        {new Date(
                          statistics.certificates.latestCertificate.taken_date
                        ).toLocaleDateString()})
                      </Typography>
                      <Box mt={2} textAlign={"center"}>
                        <img
                          
                          src={statistics.certificates.latestCertificate.image}
                          alt="Latest Certificate"
                          style={{ maxWidth: '100%', maxHeight: '200px' }}
                        />
                      </Box>
                    </Box>
                  )}
                  <Box mt={2}>
                    <Link href="/contacts" color="primary">
                      View All Contacts
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}

          {statistics.skills.totalCount > 0 ?? (
            <Grid item xs={12} md={6} lg={4} >
              <Card >
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Skills
                  </Typography>
                  <Typography variant="body1">
                    Total Skills: {statistics.skills.totalCount}
                  </Typography>
                  <Box mt={2} className={styles.skillsGrid}>
                    {statistics.skills.skills.map((skill) => (
                      <Box key={skill._id} p={1}>
                        <Link href="#">
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            style={{ width: '50px', height: '50px' }}
                          />
                        </Link>
                        
                      </Box>
                      
                    ))}
                  </Box>
                  <Box mt={2} textAlign="center">
                    <Link href="/skills" color="primary">
                      View All Skills
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}

          
          {statistics.projects.totalCount > 0 ?? (
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Projects
                  </Typography>
                  <Typography variant="body1">
                    Total Projects: {statistics.projects.totalCount}
                  </Typography>
                  {statistics.projects.latestProject && (
                    <Box mt={2}>
                      <Typography variant="subtitle2">Latest Project:</Typography>
                      <Typography variant="body2">
                        {statistics.projects.latestProject.name} (
                        {new Date(
                          statistics.projects.latestProject.createdAt
                        ).toLocaleDateString()})
                      </Typography>
                    </Box>
                  )}
                  <Box mt={2}>
                    <Link href="/projects" color="primary">
                      View All Projects
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}


          {statistics.users.totalCount > 0 ?? (
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Users
                  </Typography>
                  <Typography variant="body1">
                    Total Users: {statistics.users.totalCount}
                  </Typography>
                  <Box mt={2}>
                    <Link href="/users" color="primary">
                      View All Users
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}



          {statistics.contacts.totalCount > 0 ?? (
            <Grid item xs={12} md={6} lg={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Contacts
                  </Typography>
                  <Typography variant="body1">
                    Total Contacts: {statistics.contacts.totalCount}
                  </Typography>
                  <Typography variant="body1">
                    Unread Contacts: {statistics.contacts.unreadContacts}
                  </Typography>
                  <Box mt={2}>
                    <Link href="/contacts" color="primary">
                      View All Contacts
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )}
          
        </Grid>

        <Divider  sx={{mt:5,mb:5}} />
      </Box>
    ): <></> }
  if (!hasStatistics) {
    return <></>; // Or any placeholder for no statistics
  }

  return (
    <>
    <Grid container spacing={3} alignItems="stretch" justifyContent="space-evenly">
        {statistics.categories.totalCount > 0 && (
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Categories
                </Typography>
                <Typography variant="body1">
                  Total Categories: {statistics.categories.totalCount}
                </Typography>
                <Box mt={2}>
                  <Typography variant="subtitle2">Top Categories:</Typography>
                  <ul style={{ listStyle: "none" }}>
                    {statistics.categories.categories.map((category) => (
                      <li className={styles.category} key={category.category?._id}>
                        {category.category?.title_en} :{' '}
                        <span className={styles.category_not}>
                          ({category.totalCount} project with this category)
                        </span>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box mt={2}>
                  <Link href="/categories" color="primary">
                    View All Categories
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}

        {statistics.certificates.totalCount > 0 && (
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Certificates
                </Typography>
                <Typography variant="body1">
                  Total Certificates: {statistics.certificates.totalCount}
                </Typography>
                {statistics.certificates.latestCertificate && (
                  <Box mt={2}>
                    <Typography variant="subtitle2">Latest Certificate:</Typography>
                    <Typography variant="body2">
                      from "{statistics.certificates.latestCertificate.from}" Take in : (
                      {new Date(
                        statistics.certificates.latestCertificate.taken_date
                      ).toLocaleDateString()})
                    </Typography>
                    <Box mt={2} textAlign="center">
                      <img
                        src={statistics.certificates.latestCertificate.image}
                        alt="Latest Certificate"
                        style={{ maxWidth: '100%', maxHeight: '200px' }}
                      />
                    </Box>
                  </Box>
                )}
                <Box mt={2}>
                  <Link href="/contacts" color="primary">
                    View All Contacts
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}

        {statistics.skills.totalCount > 0 && (
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Skills
                </Typography>
                <Typography variant="body1">
                  Total Skills: {statistics.skills.totalCount}
                </Typography>
                <Box mt={2} className={styles.skillsGrid}>
                  {statistics.skills.skills.map((skill) => (
                    <Box key={skill._id} p={1}>
                      <Link href="#">
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          style={{ width: '50px', height: '50px' }}
                        />
                      </Link>
                    </Box>
                  ))}
                </Box>
                <Box mt={2} textAlign="center">
                  <Link href="/skills" color="primary">
                    View All Skills
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}

        {statistics.projects.totalCount > 0 && (
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Projects
                </Typography>
                <Typography variant="body1">
                  Total Projects: {statistics.projects.totalCount}
                </Typography>
                {statistics.projects.latestProject && (
                  <Box mt={2}>
                    <Typography variant="subtitle2">Latest Project:</Typography>
                    <Typography variant="body2">
                      {statistics.projects.latestProject.name} (
                      {new Date(
                        statistics.projects.latestProject.createdAt
                      ).toLocaleDateString()})
                    </Typography>
                  </Box>
                )}
                <Box mt={2}>
                  <Link href="/projects" color="primary">
                    View All Projects
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}

        {statistics.users.totalCount > 0 && (
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Users
                </Typography>
                <Typography variant="body1">
                  Total Users: {statistics.users.totalCount}
                </Typography>
                <Box mt={2}>
                  <Link href="/users" color="primary">
                    View All Users
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}

        {statistics.contacts.totalCount > 0 && (
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contacts
                </Typography>
                <Typography variant="body1">
                  Total Contacts: {statistics.contacts.totalCount}
                </Typography>
                <Typography variant="body1">
                  Unread Contacts: {statistics.contacts.unreadContacts}
                </Typography>
                <Box mt={2}>
                  <Link href="/contacts" color="primary">
                    View All Contacts
                  </Link>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}
        
    </Grid>

    <Divider  sx={{mt:5,mb:5}} />
    </>

  );
};

export default StatisticsSection;
