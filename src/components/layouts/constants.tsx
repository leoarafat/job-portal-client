import { Menu } from "antd";
import {
  DesktopOutlined,
  AppstoreOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import styles from "./RootLayout.module.css";
import Link from "next/link";
export const desktopMenu = (
  <Menu
    theme="light"
    mode="horizontal"
    defaultSelectedKeys={["job"]}
    className={styles.ant_menu_item}
  >
    <Link href="/jobs">
      <Menu.Item key="job" icon={<DesktopOutlined />}>
        Brows Jobs
      </Menu.Item>
    </Link>
    <Menu.Item key="services" icon={<AppstoreOutlined />}>
      Corporate
    </Menu.Item>
    <Menu.Item key="login" icon={<LoginOutlined />}>
      Sign In
    </Menu.Item>
  </Menu>
);

export const mobileMenu = (
  <Menu
    theme="light"
    mode="vertical"
    defaultSelectedKeys={["job"]}
    className={styles.ant_menu_item}
  >
    <Link href="/jobs">
      <Menu.Item key="job" icon={<DesktopOutlined />}>
        Brows Jobs
      </Menu.Item>
    </Link>
    <Menu.Item key="services" icon={<AppstoreOutlined />}>
      Corporate
    </Menu.Item>
    <Menu.Item key="login" icon={<LoginOutlined />}>
      Sign In
    </Menu.Item>
  </Menu>
);
