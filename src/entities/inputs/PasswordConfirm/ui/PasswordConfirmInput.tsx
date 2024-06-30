import React from "react";
import { Form, Input, FormItemProps } from "antd";

interface PasswordConfirmInputProps extends FormItemProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordConfirmInput: React.FC<PasswordConfirmInputProps> = (props) => {
  return (
    <Form.Item
      label="Подтверждение пароля"
      name="confirmPassword"
      dependencies={['password']}
      hasFeedback
      rules={[
        {
          required: true,
          message: "Пожалуйста, подтвердите ваш пароль",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Пароли не совпадают!'));
          },
        }),
      ]}
      {...props}
    >
      <Input.Password placeholder="Подтвердите пароль" />
    </Form.Item>
  );
};

export default PasswordConfirmInput;
