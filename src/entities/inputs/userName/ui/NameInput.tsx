import React from "react";
import { Form, Input, FormItemProps } from "antd";

interface INameInputProps extends FormItemProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameInput: React.FC<INameInputProps> = (props) => {
  return (
    <Form.Item
      label="Ваше имя"
      name="name"
      rules={[{ required: true, message: "Пожалуйста, введите ваше имя" }]}
      {...props}
    >
      <Input placeholder="Ваше имя" />
    </Form.Item>
  );
};

export default NameInput;
