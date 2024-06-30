import React from "react";
import { Button, Flex } from "antd";
import styles from "./TipsCarousel.module.scss";

interface TipsCarouselProps {
  onSelectTip: (tip: number) => void;
}

const TipsCarousel: React.FC<TipsCarouselProps> = ({ onSelectTip }) => {
  const handleTipSelect = (tip: number) => {
    onSelectTip(tip); 
  };
  return (
    <Flex justify="center" className={styles.buttons} gap={10} align="center">
      <Button onClick={() => handleTipSelect(10)}>10</Button>
      <Button onClick={() => handleTipSelect(20)}>20</Button>
      <Button onClick={() => handleTipSelect(50)}>50</Button>
      <Button onClick={() => handleTipSelect(100)}>100</Button>
    </Flex>
  );
};

export default TipsCarousel;
