import { Flex, Typography } from 'antd';
import { FC } from 'react';
import styles from "./CommentCard.module.scss";

interface ICommentCard {
  tips: number;
  recall: boolean;
  comment: string;
}

const CommentCard: FC<ICommentCard> = ({ tips, recall, comment }) => {
  return (
    <Flex className={styles.card} vertical>
      <Typography.Text className={styles.tips}>{tips} C</Typography.Text>
      {recall ? (
        <Typography.Text type='success' className={styles.recall}>Хорошо</Typography.Text>
      ) : (
        <Typography.Text type='danger' className={styles.recall}>Плохо</Typography.Text>
      )}
      <Flex gap={20}>
        <div className={styles.line}></div>
        <Flex vertical>
          <Typography.Text type='secondary'>Текстовый отзыв</Typography.Text>
          <Typography.Text className={styles.comment}>{comment}</Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CommentCard;
