/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Button, Typography, Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";

const { Title, Paragraph } = Typography;

const DefaultDashboardContent = () => {
  const user = useAppSelector((state: RootState) => state.auth.user) as any;
  return (
    <div style={{ textAlign: "center", paddingTop: "50px" }}>
      <Title level={2} style={{ color: "#1890ff" }}>
        Hey {user?.name} Welcome to ProCareer Dashboard!
      </Title>
      <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
        <Col xs={24} sm={12}>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Title level={4}>Get Started</Title>
            <Paragraph>
              It's time to explore ProCareer's powerful features for job seekers
              and employers.
            </Paragraph>
            <Button className="bg-blue-500" type="primary">
              Explore <ArrowRightOutlined />
            </Button>
          </div>
        </Col>
        <Col xs={24} sm={12}>
          <div
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Title level={4}>Find Your Dream Job</Title>
            <Paragraph>
              Discover and apply for the latest job openings that match your
              skills and interests.
            </Paragraph>
            <Button className="bg-blue-500" type="primary">
              Search Jobs <ArrowRightOutlined />
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DefaultDashboardContent;
