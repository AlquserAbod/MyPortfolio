import { Divider } from '@mui/material';
import StatisticsSection from './Statistics';


const Dashboard: React.FC = () => {

  return (
    <div>
      <StatisticsSection />
      <Divider  sx={{mt:5,mb:5}} />
    </div>
  );
};

export default Dashboard;
