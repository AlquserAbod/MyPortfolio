import { Divider } from '@mui/material';
import StatisticsSection from '@/components/dashboard/Statistics';
import AboutMeEditor from '@/components/dashboard/AboutMeEditor';
import SocialLinksSection from '@/components/dashboard/SocialLinksSection';


const Dashboard: React.FC = () => {

  return (
    <div>
      <StatisticsSection />
      
      <Divider  sx={{mt:5,mb:5}} />

      <AboutMeEditor />

      <Divider  sx={{mt:5,mb:5}} />

      <SocialLinksSection />
    </div>
  );
};

export default Dashboard;
