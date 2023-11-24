import React, { useState } from "react";
import { PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [getItem("Review", "1", <PieChartOutlined />)];

export const RootView: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: colorBgContainer,
          padding: 0,
          position: "fixed",
          width: "100%",
          zIndex: 100,
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        Header
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            zIndex: 1,
            marginTop: 68,
            background: "#fff",
            borderRadius: 8,
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout style={{ marginLeft: collapsed ? 10 : 20 }}>
          <Content
            style={{
              zIndex: 1,
              marginTop: 80,
              padding: 24,
              background: "#fff",
              width: "100%",
              borderRadius: 8,
            }}
          >
            <Outlet />
          </Content>
          <Footer
            style={{
              textAlign: "center",
              borderRadius: 8,
            }}
          >
            Footer
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};
