import React, { useRef } from "react";
import { Form, Modal, Button, Spin } from "antd";
import styled from "styled-components";

import InputForm from "../../components/form/Input";
import { useCategoryId } from "./queries/queries";
import { categoryApi } from "../../api/categoryApi";
import Permission from "../../components/permission/Permission";

function ModalAdd({ isModalOpen, setIsModalOpen, id, setId, refetch }) {
  const formElemt = useRef();
  const argument = {
    params: {
      id: id || null,
    },
    options: {
      keepPreviousData: true,
    },
  };
  const { data, isPreviousData, isFetching } = useCategoryId(argument);
  const WrapperStyle = styled.div`
    display: flex;
    justify-content: right;
    align-items: center;
    width: 100%;
    margin-top: 20px;
  `;

  const handleCancel = () => {
    resetForm();
  };
  const resetForm = () => {
    setId(null);
    refetch();
    setIsModalOpen(false);
    formElemt.current.setFieldsValue({ name: "" });
  };
  const onFinish = async (values) => {
    id
      ? await categoryApi.patch({ data: values, id })
      : await categoryApi.add(values);
  };
  return (
    <Modal
      title="Thêm thể loại"
      visible={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      autoFocus={false}
    >
      {!isPreviousData && !isFetching ? (
        <Form
          name="control-hooks"
          onFinish={onFinish}
          className="form"
          ref={formElemt}
          initialValues={{ ...data?.data } || {}}
        >
          {isModalOpen && (
            <InputForm
              name="name"
              autoFocus={true}
              label="Tên"
              placeholder="Nhập tên"
            />
          )}
          <Permission roles={["ADMIN"]} noAccess={null}>
            <WrapperStyle>
              <Button type="primary" htmlType="submit">
                Thêm thể loại
              </Button>
            </WrapperStyle>
          </Permission>
        </Form>
      ) : (
        <Spin />
      )}
    </Modal>
  );
}

export default ModalAdd;
