// src/pages/Pay.tsx
import { useState } from "react";
import { BusinessGoalCard } from "@/entities/businessGoalCard";
import { Button, Flex } from "antd";
import { TipInput } from "@/entities/inputs";
import { TipsCarousel } from "@/entities/tipsCarousel";
import { Rating } from "@/entities/raiting";
import { TextAreaCard } from "@/entities/textAreaCard";
import { Drawer } from "@/entities/drawer";
import "./Pay.scss";

const Pay = () => {
  const [tip, setTipAmount] = useState<number>();
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const handleTipSelect = (tip: number) => {
    setTipAmount(tip);
    console.log(tip);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <Flex vertical className="pay">
      <BusinessGoalCard
        businessName="Бублик"
        goal="Бублик копит на путешествие"
        secondaryText="Бублик"
      />
      <TipInput tipAmount={tip} />
      <TipsCarousel onSelectTip={handleTipSelect} />
      <Rating />
      <TextAreaCard />
      <Button className="payBtn" type="primary" onClick={showDrawer}>К оплате</Button>
      <Drawer visible={drawerVisible} onClose={closeDrawer} />
    </Flex>
  );
};

export default Pay;
