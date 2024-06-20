import { Divider } from '@mui/material';
import StatisticsSection from './Statistics';
import AboutMeEditor from './AboutMeEditor';


const Dashboard: React.FC = () => {

  return (
    <div>
      <StatisticsSection />
      <Divider  sx={{mt:5,mb:5}} />
      <AboutMeEditor />
    </div>
  );
};

export default Dashboard;
