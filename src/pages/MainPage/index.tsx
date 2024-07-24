import Navbar from '@/layout/Navbar';
import HeroSection from './heroSection'
import '@/styles/index.scss';
import WhoamiSection from './whoami';
import SkillsSection from './skillsSection';

const MainPage = () => {
  return (
    <div className='portfolio'>
      <Navbar />

      <HeroSection />
      
      <WhoamiSection />

      <SkillsSection /> 
    </div>
  )
}

export default MainPage
