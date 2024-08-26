import React from "react";
import styles from "@/styles/components/titleBox.module.scss";

interface TitleBoxProps {
  title: string;
}

const TitleBox: React.FC<TitleBoxProps> = ({ title }) => {
  return (
    <div className={styles.titleHolder}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default TitleBox;
