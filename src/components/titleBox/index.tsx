import React from "react";
import styles from "@/styles/components/titleBox.module.scss";

interface TitleBoxProps {
  title: string;
  className?: string; 
  holderClass?: string; 
}

const TitleBox: React.FC<TitleBoxProps> = ({ title, holderClass, className }) => {
  return (
    <div className={`${styles.titleHolder} ${holderClass}`}>
     {title}
    </div>
  );
};

export default TitleBox;
