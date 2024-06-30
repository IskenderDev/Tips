import { Flex, Typography } from "antd";
import { FC } from "react";
import styles from './BusinessGoalCard.module.scss'

interface IBusinessGoalCardProps {
  goal: string;
	businessName: string;
  secondaryText: string;
}

const BusinessGoalCard: FC<IBusinessGoalCardProps> = ({ goal, businessName, secondaryText }) => {
  return (
    <Flex align="center" justify="space-between" className={styles.mainDiv}>
      <Flex vertical>
        <Typography.Text type="secondary">{secondaryText}</Typography.Text>
        <Typography.Text className={styles.goal}>{goal}</Typography.Text>
      </Flex>
			<Typography.Title level={5}>{businessName}</Typography.Title>
    </Flex>
  );
};

export default BusinessGoalCard;
