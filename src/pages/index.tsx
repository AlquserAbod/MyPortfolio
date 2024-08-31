import HeroSection from "../sections/hero";

import WhoamiSection from "../sections/who_iam";
import SkillsSection from "../sections/skills";
import CustomerReviews from "../sections/customer_reviews";
import GetInTouch from "../sections/get_in_touch";
import ServicesSection from "../sections/services";
import Projects from "@/sections/projects";

const MainPage = () => {

  return (
    <>
      <HeroSection />

      <WhoamiSection />

      <SkillsSection />

      <Projects /> 
      
      <ServicesSection />
      

      <CustomerReviews />

      <GetInTouch />
    </>
  );
};

export default MainPage;
