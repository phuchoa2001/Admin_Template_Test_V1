import React from "react";
import { useIntl } from "react-intl";
import { Form, Input } from "antd";
function InputForm({
  name,
  label,
  placeholder = "",
  rules = true,
  disabled = false,
}) {
  const intl = useIntl();

  const RuleObject = rules
    ? [
        {
          required: true,
          message: "không để trường này trống",
        },
      ]
    : [];
  return (
    <Form.Item name={name} label={label} rules={RuleObject}>
      <Input disabled={disabled} placeholder={placeholder} />
    </Form.Item>
  );
}

export default InputForm;
