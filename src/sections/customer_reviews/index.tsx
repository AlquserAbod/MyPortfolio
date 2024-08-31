import React from "react";
import styles from "@/styles/sections/customer_reviews/styles.module.scss";
import TitleBox from "@/components/titleBox";
import { useTranslation } from "react-i18next";
import CommentCard from "./comment_card";
import ahmedMohammedAvatar from "@/assets/images/customers/ahmed_mohammed.jpg";
import emilyDavisAvatar from "@/assets/images/customers/emily_davis.jpg";
import omarAhmedAvatar from "@/assets/images/customers/omar_ahmed.jpg";

const CustomerReviews: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.container} id="customerReviews">
        
        <div className={styles.titleHolder}>
          <TitleBox title={t("customerReveiews.title")} />
        </div>

        <div className={styles.reviewsHolder}>
          <CommentCard
            name={t("customerReveiews.review1.name")}
            service={t("customerReveiews.review1.service")}
            comment={t("customerReveiews.review1.comment")}
            imageUrl={ahmedMohammedAvatar}
          />
          <CommentCard
            name={t("customerReveiews.review2.name")}
            service={t("customerReveiews.review2.service")}
            comment={t("customerReveiews.review2.comment")}
            imageUrl={emilyDavisAvatar}
          />
          <CommentCard
            name={t("customerReveiews.review3.name")}
            service={t("customerReveiews.review3.service")}
            comment={t("customerReveiews.review3.comment")}
            imageUrl={omarAhmedAvatar}
          />
        </div>

    </section>
  );
};

export default CustomerReviews;
