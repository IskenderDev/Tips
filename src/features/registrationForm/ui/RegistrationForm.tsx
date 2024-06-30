// src/widgets/registration-form/ui/RegistrationForm.tsx
import React from 'react';
import { Button, Form } from 'antd';
import { BusinessName, NameInput, EmailInput, PasswordInput, PasswordConfirmInput } from '@/entities/inputs';
import './RegistrationForm.scss';
import { useAtom } from 'jotai';
import { formDataAtom } from '@/app/jotai/atoms';
import { useNavigate } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useAtom(formDataAtom);
  const navigate = useNavigate();

  const onFinish = (values: any) => {
    setFormData(values);
    const encodedEmail = encodeURIComponent(values.email);
    navigate(`/business/${encodedEmail}`);
  };

  return (
    <Form onFinish={onFinish} className='form' layout='vertical'>
      <BusinessName />
      <NameInput />
      <EmailInput />
      <PasswordInput />
      <PasswordConfirmInput />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Зарегистрироваться
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;
