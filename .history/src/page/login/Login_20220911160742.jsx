import React, { useRef } from "react";
import styled from "styled-components";
import { Form } from "antd";

import InputForm from "../../components/form/Input";
import { InputFormPassword } from "../../components/form/Input";

const LoginStyles = styled.div`
  display: flex;
  .text {
    font-size: 36px;
    margin-bottom: 10px;
    text-align: center;
    width: 100%;
  }
  .login {
    background: #fff;
    padding: 150px 120px;
    border-radius: 8px;
  }
  @media only screen and (max-width: 960px) {
    flex-direction: column;
    .image {
      height: 250px;
      object-fit: cover;
      border-radius: 8px 8px 0px 0px;
      
    }
    .login {
      order: 2;
      border-radius: 0px 0px 8px 8px;
    }
  }
`;

function Login(props) {
  const formElemt = useRef();
  const onFinish = async (values) => {};
  return (
    <LoginStyles>
      <div className="login">
        <Form
          name="control-hooks"
          onFinish={onFinish}
          className="form"
          ref={formElemt}
        >
          <h3 className="text">Đăng nhập</h3>
          <InputForm
            name="user"
            autoFocus={true}
            label="Tài khoản"
            placeholder="Nhập tài khoản"
          />
          <InputFormPassword
            name="password"
            label="Mất khẩu"
            placeholder="Nhập mất khẩu"
          />
        </Form>
      </div>
      <img
        src={process.env.PUBLIC_URL + "/image/login.jpg"}
        alt=""
        className="image"
      />
    </LoginStyles>
  );
}

export default Login;
