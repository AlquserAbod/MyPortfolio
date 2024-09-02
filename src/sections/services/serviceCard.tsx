import styles from "@/styles/sections/services/serviceCard.module.scss";
import { Service } from "@/types/service";

import { Trans } from "react-i18next";


const ServiceCard = ({ service }: { service: Service }) => {


  return (
    <div className={styles.container}>
      <div className={styles.icon}>
          <img src={`/images/icons/services/${service.icon}`} alt={service.title}  loading="lazy"/>
      </div>
      <div className={styles.title}>{service.title}</div>
      <div className={styles.description}>{service.description}</div>
      <div
        className={styles.contactUs}
        onClick={(e) => {
          e.preventDefault();
          const targetElement = document.getElementById("getinTouch");

          window?.scrollTo({
            top: targetElement?.offsetTop,
            behavior: "smooth",
          });
        }}
      >
        <Trans i18nKey={"services.contactUs"} />
      </div>
    </div>
  );
};

export default ServiceCard;
