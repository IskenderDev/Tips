// src/components/BankDrawer.tsx
import { Drawer as AntDrawer, Button, List, Avatar } from "antd";
import { FC } from "react";
import bakai from "@/shared/assets/bakaibank_logo-removebg-preview.png";
import mbank from "@/shared/assets/mbank.png";
import optima from "@/shared/assets/optima.png";
import o from "@/shared/assets/o.png";
import { useNavigate } from "react-router-dom";

const banks = [
  { name: "BakaiBank", logo: bakai },
  { name: "MBank", logo: mbank },
  { name: "Optima", logo: optima },
  { name: "О!Деньги", logo: o },
];

const BankDrawer: FC<{ visible: boolean; onClose: () => void }> = ({ visible, onClose }) => {
  const navigate = useNavigate();

  const handleBankSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AntDrawer
      title="Выберите банк"
      placement="bottom"
      onClose={onClose}
      visible={visible}
    >
      <List
        dataSource={banks}
        renderItem={(item) => (
          <List.Item >
            <List.Item.Meta
              avatar={<Avatar size={32} src={item.logo} />}
              title={
                <Button
                  onClick={() => handleBankSelect('/')}
                  type="link"
                >
                  {item.name}
                </Button>
              }
            />
          </List.Item>
        )}
      />
    </AntDrawer>
  );
};

export default BankDrawer;
