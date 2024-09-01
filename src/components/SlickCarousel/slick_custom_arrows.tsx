import { CSSProperties } from "react";
import styles from "@/styles/components/slick.module.scss";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

interface PagingProps {
  i: number;
}

export function SlickCustomNextArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div className={`${styles.nextArrow} ${styles.arrow} `}>
      <div className={styles.icon} onClick={onClick}>
        <MdOutlineArrowForwardIos />
      </div>
    </div>
  );
}

export function SlickCustomPrevArrow(props: ArrowProps) {
  const { onClick } = props;
  return (
    <div className={`${styles.nextArrow} ${styles.arrow} `}>
      <div className={styles.icon} onClick={onClick}>
        <MdOutlineArrowBackIosNew />
      </div>
    </div>
  );
}

export function SlickCustomDots(dots: any) {
    console.log(dots);
    
  return (
    <div className={styles.slickDots}>
      <ul> {dots.dots}  </ul>
    </div>
  );
}

export function SlickCustomPaging(props: PagingProps) {
    
  return <div className={styles.dot}></div>;
}
