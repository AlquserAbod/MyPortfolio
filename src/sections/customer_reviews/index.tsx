import React from "react";
import styles from "@/styles/sections/customer_reviews/styles.module.scss";
import TitleBox from "@/components/titleBox";
import { useTranslation } from "react-i18next";
import CommentCard from "./comment_card";
import ahmedMohammedAvatar from "@/assets/images/customers/ahmed_mohammed.jpg";
import emilyDavisAvatar from "@/assets/images/customers/emily_davis.jpg";
import omarAhmedAvatar from "@/assets/images/customers/omar_ahmed.jpg";

const CustomerReviews: React.FC = () => {
  const { t } = useTranslation('customerReviews');

  return (
    <section className={styles.container} id="customerReviews">
        
        <div className={styles.titleHolder} data-aos={'flip-up'}>
          <TitleBox title={t("title")} />
        </div>


        <div className={styles.reviewsContainer}>
          <div className={styles.reviewsHolder}>
            <CommentCard
              name={t("review1.name")}
              service={t("review1.service")}
              comment={t("review1.comment")}
              imageUrl={ahmedMohammedAvatar}
            />

            <CommentCard
              name={t("review2.name")}
              service={t("review2.service")}
              comment={t("review2.comment")}
              imageUrl={emilyDavisAvatar}
            />

            <CommentCard
              name={t("review3.name")}
              service={t("review3.service")}
              comment={t("review3.comment")}
              imageUrl={omarAhmedAvatar}
            />
          </div>

          <div className={styles.bg}></div>
        </div>

    </section>
  );
};

export default CustomerReviews;
