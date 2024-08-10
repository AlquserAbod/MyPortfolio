import React from 'react'
import styles from './styles/comment.module.scss';

interface CommentCardProps {
  name: string;
  service: string;
  imageUrl: string;
  comment: string;
}
const CommentCard: React.FC<CommentCardProps> =  ({name, service, imageUrl,comment}) => {
  return (
    <div className={styles.reviewHolder}>
      <div className={styles.itemsHolder}>
        <div className={styles.avatarHolder}>
          <img src={imageUrl} alt={name}  width={150}/>
        </div>
        <div className={styles.contentHolder}>
          <div className={styles.nameHolder}>
            {name}
          </div>
          <div className={styles.serviceHolder}>
            {service}
          </div>
          <div className={styles.commentHolder}>
            {comment}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
