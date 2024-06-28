import { Divider } from '@mui/material';
import StatisticsSection from './dashboard/Statistics';
import AboutMeEditor from './dashboard/AboutMeEditor';
import SocialLinksSection from './dashboard/SocialLinksSection';
<<<<<<< HEAD
=======
import SiteIdentity from './dashboard/SiteIdentity';
>>>>>>> site-identity-dashboard


const Dashboard: React.FC = () => {

  return (
    <div>
<<<<<<< HEAD

=======
      <SiteIdentity />
      
>>>>>>> site-identity-dashboard
      <Divider  sx={{mt:5,mb:5}} />


      <StatisticsSection />
      
      <AboutMeEditor />

      <Divider  sx={{mt:5,mb:5}} />

      <SocialLinksSection />
    </div>
  );
};

export default Dashboard;
