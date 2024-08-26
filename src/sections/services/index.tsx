import TitleBox from "@/components/titleBox";
import styles from "@/styles/sections/services/styles.module.scss";

import { useEffect } from "react";
import { t } from "i18next";
import ServiceCard from "./serviceCard";
import Carousel from "react-multi-carousel";

const ServicesSection = () => {
  const services = t("services.services", { returnObjects: true });

  useEffect(() => {
    import("react-multi-carousel/lib/styles.css")
      .then(() => {
        console.log("Carousel CSS loaded successfully");
      })
      .catch((err) => {
        console.error("Failed to load Carousel CSS", err);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1350 },
      items: 5,
    },
    desktop: {
      breakpoint: {
        max: 1350,
        min: 1024,
      },
      items: 4,
    },
    mobile: {
      breakpoint: {
        max: 500,
        min: 0,
      },
      items: 1,
    },
    other: {
      breakpoint: {
        max: 900,
        min: 500,
      },
      items: 2,
    },
    tablet: {
      breakpoint: {
        max: 1150,
        min: 900,
      },
      items: 3,
    },
  };

  return (
    <div className={styles.container} id="services">
      <div className={styles.webServices}>
        <div className={styles.titleHolder}>
          <TitleBox title={t("services.title")} />
        </div>

        <div className={styles.cardsContainer}>
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={3000}
            draggable
            focusOnSelect={false}
            infinite
            itemClass={styles.itemClass}
            minimumTouchDrag={80}
            pauseOnHover
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            slidesToSlide={1}
            swipeable
          >
            {Object.entries(services).map(([key, service]: [string, any]) => (
              <ServiceCard
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                key={key}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
