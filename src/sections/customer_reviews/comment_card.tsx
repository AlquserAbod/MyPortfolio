import React from 'react'
import styles from "@/styles/sections/customer_reviews/comment.module.scss";

interface CommentCardProps {
  name: string;
  service: string;
  imageUrl: string;
  comment: string;
}
const CommentCard: React.FC<CommentCardProps> =  ({name, service, imageUrl,comment}) => {
  return (
    <div className={styles.reviewHolder} data-aos={'zoom-in'}>
      <div className={styles.itemsHolder}>
        <div className={styles.avatarHolder}>
          <img src={imageUrl} alt={'customer profile picture'}  width={150} loading='lazy'/>
        </div>
        <div className={styles.contentHolder}>
          <div className={styles.name}>
            {name}
          </div>
          <div className={styles.service}>
            {service}
          </div>
          <div className={styles.comment}>
            {comment}
          </div>
        </div>
      </div>

      <div className={styles.bg}></div>
    </div>
  )
}

export default CommentCard
