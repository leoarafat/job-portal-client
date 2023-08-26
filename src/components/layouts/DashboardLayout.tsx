import React, { ReactNode, useState } from "react";
import Link from "next/link";
import {
  FileOutlined,
  BarChartOutlined,
  UserOutlined,
  FileAddOutlined,
  ProfileOutlined,
  TranslationOutlined,
  OrderedListOutlined,
  TeamOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { GrUserSettings } from "react-icons/gr";
const { Header, Content, Sider } = Layout;

type MenuItem = {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  link?: string;
  children?: MenuItem[];
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  link?: string,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    link,
    children,
    label,
  };
}

interface RootLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const userRole = "employee" || "employee";

  let filteredItems: MenuItem[] = [];
  if (userRole === "employee") {
    filteredItems = [
      getItem("Dashboard", "1", <UserOutlined />, "/profile"),

      getItem("Update Profile", "2", <GrUserSettings />, "/update-profile"),
      getItem("Previous Job", "3", <BarChartOutlined />, "/previous-job"),
      getItem("Post a Job", "4", <FileAddOutlined />, "/post-job"),
      getItem("Resume Bank", "5", <ProfileOutlined />, "/resume-bank"),
      getItem("Transactions", "6", <TranslationOutlined />, "/transactions"),
    ];
  } else if (userRole === "candidate") {
    filteredItems = [
      getItem("Dashboard", "1", <UserOutlined />, "/profile"),

      getItem("Applied Jobs", "2", <OrderedListOutlined />, "/applied-jobs"),
      getItem(
        "Skill Enhancement",
        "3",
        <BarChartOutlined />,
        "/skill-enhancement"
      ),
      getItem("Social Feed", "4", <TeamOutlined />, "/social-feed"),
      getItem(
        "Transactions History",
        "5",
        <TranslationOutlined />,
        "/transactions-history"
      ),
    ];
  }

  const combinedItems: MenuItem[] = [...filteredItems];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ background: "white" }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline">
          {combinedItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link href={item.link || "#"}>
                <span>{item.label}</span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: "100vh",
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
