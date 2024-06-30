// src/entities/TipInput.tsx
import { Form, InputNumber, Typography } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { FC } from "react";

interface TipInputProps {
  tipAmount?: number;
}

const TipInput: FC<TipInputProps> = ({ tipAmount }) => {
  return (
    <Form.Item name="tip" layout="vertical" label={<Typography.Text className="payLabel">Чаевые</Typography.Text>}>
      <InputNumber
        prefix="С"
        suffix={<EditOutlined />}
        inputMode="numeric"
        className="payInput"
        size="large"
        defaultValue={tipAmount}
      />
    </Form.Item>
  );
};

export default TipInput;
