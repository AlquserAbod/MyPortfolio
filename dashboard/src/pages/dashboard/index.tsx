import { Divider } from '@mui/material';
import StatisticsSection from './Statistics';
import AboutMeEditor from './AboutMeEditor';
import SocialLinksSection from './SocialLinksSection';


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
