import React, { ReactNode, useState } from "react";

import Link from "next/link";
import {
  BarChartOutlined,
  UserOutlined,
  FileAddOutlined,
  ProfileOutlined,
  TranslationOutlined,
  OrderedListOutlined,
  TeamOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { GrUserSettings } from "react-icons/gr";
import { MenuItem, getItem } from "@/shared/Dashboard";
import { useAppSelector } from "@/redux/hooks";
import { User } from "@/shared/user";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import DefaultDashboardContent from "@/components/ui/DefaultDashboard";
import Head from "next/head";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);
const { Header, Content, Sider } = Layout;

interface RootLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: RootLayoutProps) => {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user) as User;
  const id = user?.id;
  if (!user?.email) {
    router.push("/login-candidate");
  }
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let filteredItems: MenuItem[] = [];
  if (user?.role === "Employee") {
    filteredItems = [
      getItem("Profile", "1", <UserOutlined />, "/employee-profile"),

      getItem(
        "Update Profile",
        "2",
        <GrUserSettings />,
        `/employee-profile/${id}`
      ),
      getItem("Previous Job", "3", <BarChartOutlined />, "/previous-jobs"),
      getItem("Post a Job", "4", <FileAddOutlined />, "/post-job"),
      getItem("Resume Bank", "5", <ProfileOutlined />, "/resume-bank"),
      getItem("Transactions", "6", <TranslationOutlined />, "/transactions"),
    ];
  } else if (user?.role === "Candidate") {
    filteredItems = [
      getItem("Profile", "1", <UserOutlined />, "/candidate-profile"),
      getItem(
        "Update Profile",
        "2",
        <GrUserSettings />,
        `/candidate-profile/${id}`
      ),
      getItem("Applied Jobs", "2", <OrderedListOutlined />, "/applied-jobs"),
      getItem("Saved List", "3", <FileDoneOutlined />, "/saved-job"),
      getItem(
        "Skill Enhancement",
        "4",
        <BarChartOutlined />,
        "/skill-enhancement"
      ),
      getItem("Social Feed", "5", <TeamOutlined />, "/social-feed"),
      getItem(
        "Transactions History",
        "6",
        <TranslationOutlined />,
        "/transactions-history"
      ),
    ];
  }

  const combinedItems: MenuItem[] = [...filteredItems];

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>{" "}
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
              {children || <DefaultDashboardContent />}
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default DashboardLayout;
DashboardLayout.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
