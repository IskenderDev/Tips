import React from "react";
import { Form, Input, FormItemProps } from "antd";

interface IPasswordInputProps extends FormItemProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<IPasswordInputProps> = (props) => {
  return (
    <Form.Item
      label="Пароль"
      name="password"
      
      rules={[{ required: true, message: "Пожалуйста, введите пароль" }]}
      {...props}
    >
      <Input.Password type="password" placeholder="Придумайте пароль" />
    </Form.Item>
  );
};

export default PasswordInput;
