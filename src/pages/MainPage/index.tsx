import Navbar from '@/layout/Navbar';
import HeroSection from './heroSection'
import '@/styles/index.scss';

const MainPage = () => {
  return (
    <div className='portfolio'>
      <Navbar />
      <HeroSection />
    </div>
  )
}

export default MainPage
