import React from "react";
import { Form, Input, FormItemProps } from "antd";

interface IEmailInputProps extends FormItemProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: React.FC<IEmailInputProps> = (props) => {
  return (
    <Form.Item
      label="Почта"
      name="email"
      rules={[
        { required: true, message: "Пожалуйста, введите вашу почту" },
        {
          type: "email",
          message: "Пожалуйста, введите корректный адрес почты",
        },
      ]}
      {...props}
    >
      <Input placeholder="Почта" />
    </Form.Item>
  );
};

export default EmailInput;
