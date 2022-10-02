import { HomeOutlined, AppstoreOutlined, FrownOutlined, FileImageOutlined } from '@ant-design/icons';

export const SideBarData = [
    {
        title: "Dashboard",
        icon: <HomeOutlined />,
        path: "/"
    }, {
        title: "Danh sách ứng dụng",
        icon: <AppstoreOutlined />,
        path: "/app"
    }, {
        title: "Danh sách Hình ảnh",
        icon: <FileImageOutlined />,
        path: "/images"
    }, {
        title: "Danh sách biểu tượng",
        icon: <FrownOutlined />,
        path: "/icon"
    }
]