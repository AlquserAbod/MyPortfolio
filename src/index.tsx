import Navbar from "@/layout/Navbar";
import HeroSection from "./sections/hero";


import WhoamiSection from "./sections/who_iam";
import SkillsSection from "./sections/skills";
import CustomerReviews from "./sections/customer_reviews";
import GetInTouch from "./sections/get_in_touch";
import ServicesSection from "./sections/services";
import Footer from "@/layout/footer";
import Projects from "./sections/projects";
import ScrollToTopButton from "./components/scrollToTop";

const MainPage = () => {
  
  return (
    <>
      <Navbar />

      <HeroSection />

      <WhoamiSection />

      <SkillsSection />

      <Projects /> 

      <ServicesSection />

      <CustomerReviews />

      <GetInTouch />

      <Footer />

      <ScrollToTopButton />
    </>
  );
};

export default MainPage;
