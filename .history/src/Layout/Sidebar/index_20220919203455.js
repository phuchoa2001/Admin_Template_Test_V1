import React from 'react';
import { UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom';

import Styles from './index.module.css';
import Logo from '../../imgs/logo.png';
import MenuSideBar from './Menusidebar';
import styled from 'styled-components';

const LoginStyles = styled.div`
margin-top: 10px;
display: flex;
justify-content: flex-start;
align-items: center;
margin-left: 10px;
.text {
    font-size: 14px;
    line-height: 15px;
    margin-left: 5px;
    font-weight: 700;
    padding-right: 10px;
    border-radius: ;
}
.text:nth-child(1) {
    border-right: 1px solid #333 ;
}
`
function SideBar(props) {
    const history = useHistory();
    return (
        <div className={Styles.Sidebar}>
            <div className={Styles.wrapper}>
                <div className={Styles.logo} onClick={() => history.push("/")}>
                    <img src={Logo} className={Styles.img} alt={"logo"} />
                    <p className={Styles.text}>Xoa<span className={Styles.span}>Ne</span>n</p>
                </div>
                <LoginStyles>
                    <p className='text'>Admin</p>
                    <p className='link'>Đăng xuất</p>
                </LoginStyles>
                <MenuSideBar />
            </div>
        </div>
    );
}

export default SideBar;