import React from "react";
import { Form, Input, FormItemProps } from "antd";

interface IBusinessNameProps extends FormItemProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BusinessName: React.FC<IBusinessNameProps> = (props) => {
  return (
    <Form.Item
      label="Название вашего заведения "
      name="businessName"
      rules={[
        {
          required: true,
          message: "Пожалуйста, введите название заведения",
        },
      ]}
      {...props}
    >
      <Input placeholder="Название заведени" />
    </Form.Item>
  );
};

export default BusinessName;
