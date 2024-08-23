import Navbar from '@/layout/Navbar';
import HeroSection from './heroSection'
import '@/styles/index.scss';
import WhoamiSection from './whoami';
import SkillsSection from './skillsSection';
import CustomerReviews from './customer_reviews_section';
import GetInTouch from './getinTouch_section';
import ServicesSection from './services_section';

const MainPage = () => {
  return (
    <div className='portfolio'>
      <Navbar />

      <HeroSection />
      
      <WhoamiSection />

      <SkillsSection /> 
      
      <ServicesSection />

      <CustomerReviews />

      <GetInTouch />
    </div>
  )
}

export default MainPage
