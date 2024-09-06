import TitleBox from "@/components/titleBox";
import styles from "@/styles/sections/services/styles.module.scss";

import ServiceCard from "./serviceCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { isRtl } from "@/utils/i18n";
import { useTranslation } from "react-i18next";
import { servicesData } from "@/data/services-data";

const ServicesSection = () => {
  const { t } = useTranslation('services');



  const servicesTranslations = t("services", { returnObjects: true }) as Record<
    string,
    any
  >;

  const services = Object.entries(servicesData).map(([key, service]) => ({
    ...service,
    title: servicesTranslations[key]?.title,
    description: servicesTranslations[key]?.description,
  }));


  const direction = isRtl() ? "rtl" : "ltr";

  return (
    <section className={styles.container} id="services">
      <div className={styles.titleHolder} data-aos={'flip-up'}>
        <TitleBox title={t("title")} />
      </div>


      <Swiper
        key={direction}
        slidesPerGroup={1}
        spaceBetween={15}
        pagination={{
          clickable: false,
          
        }}
        dir={direction}
        navigation={true}
        breakpoints={{
          250: {
            slidesPerView: 2,
          },
          350: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
          1500: {
            slidesPerView: 7,
          },
        }}

        modules={[Pagination, Navigation, Autoplay]}
        
        wrapperClass={styles.wrapper}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        
        
      >
        {Object.entries(services).map(([key, service]: [string, any]) => (
          <SwiperSlide className={styles.swiperSlide} key={key} >
            <ServiceCard
            service={service}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServicesSection;
