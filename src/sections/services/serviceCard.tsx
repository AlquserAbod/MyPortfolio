import styles from "@/styles/sections/services/serviceCard.module.scss";

import React, { useEffect, useState } from "react";
import { Trans } from "react-i18next";

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconName,
}) => {
  const [iconUrl, setIconUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconModule = await import(
          `@/assets/icons/services/${iconName}.png`
        );
        setIconUrl(iconModule.default);
      } catch (error) {
        console.error("Error loading icon:", error);
        setIconUrl(null); // Handle error case
      }
    };

    loadIcon();
  }, [iconName]);

  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        {iconUrl ? (
          <img src={iconUrl} alt="Service Icon" width={50} />
        ) : (
          <div></div>
        )}
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
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
