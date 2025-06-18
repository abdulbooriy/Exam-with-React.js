import React, { useState } from "react";
import {
  BgColorsOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProductOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography } from "antd";
// import CreateProducts from "../createProducts/CreateProducts";
import Colors from "../colors/Colors";
// import Products from "../products/Products";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="p-4">
            <Title style={{ color: "white" }} level={3}>
              LOGOO
            </Title>
          </div>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                key: "1",
                icon: <ProductOutlined />,
                label: "Create Products",
              },
              {
                key: "2",
                icon: <ProductOutlined />,
                label: "Products",
              },
              {
                key: "3",
                icon: <BgColorsOutlined />,
                label: "Colors",
              },
            ]}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              height: "100vh",
              overflowY: "auto",
            }}>
            {/* <CreateProducts /> */}
            <Colors />
            {/* <Products /> */}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default React.memo(Dashboard);
