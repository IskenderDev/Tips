import { Flex, Typography } from "antd";
import { FC } from "react";
import styles from './SumCard.module.scss'

interface ISumCardProps {
  sum: number;
	businessName: string;
  secondaryText: string;
}

const SumCard: FC<ISumCardProps> = ({ sum, businessName, secondaryText }) => {
  return (
    <Flex align="center" justify="space-between" className={styles.mainDiv}>
      <Flex vertical>
        <Typography.Text type="secondary">{secondaryText}</Typography.Text>
        <Typography.Text className={styles.sum}>{sum} C</Typography.Text>
      </Flex>
			<Typography.Title level={5}>{businessName}</Typography.Title>
    </Flex>
  );
};

export default SumCard;
