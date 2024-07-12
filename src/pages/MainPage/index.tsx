import Navbar from '@/layout/Navbar';
import HeroSection from './heroSection'
import '@/styles/index.scss';
import WhoamiSection from './whoami';

const MainPage = () => {
  return (
    <div className='portfolio'>
      <Navbar />

      <HeroSection />
      
      <WhoamiSection />
    </div>
  )
}

export default MainPage
