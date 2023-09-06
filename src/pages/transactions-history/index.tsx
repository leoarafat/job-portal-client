import { useGetOrderByIdQuery } from "@/redux/features/courses/courseSlice";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import dynamic from "next/dynamic";
import React from "react";
import DashboardLayout from "../dashboard";
import { Card, Col, Row } from "antd";
import Head from "next/head";

const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const MyOrders = () => {
  const user = useAppSelector((state: RootState) => state.auth.user);
  const id = user?.id;
  const { data: myOrder, isLoading } = useGetOrderByIdQuery(id);

  return (
    <>
      <Head>
        <title>Transaction History</title>
      </Head>{" "}
      <Row gutter={[16, 16]}>
        {" "}
        {/* Add consistent vertical and horizontal spacing */}
        {myOrder?.data?.map((order: any) => {
          return (
            <Col key={order?.id} xs={24} sm={12} md={8} lg={6}>
              {/* Set column widths for different screen sizes */}
              <Card
                hoverable
                style={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "8px",
                  height: "100%", // Set a fixed height for the card
                }}
              >
                <h3
                  style={{ fontSize: "18px", fontWeight: "bold", margin: "0" }}
                >
                  {order?.courseName}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    marginBottom: "12px",
                  }}
                >
                  Transaction ID: {order?.transactionId}
                </p>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "12px",
                  }}
                >
                  Price: ${order?.price}
                </div>
                <button
                  style={{
                    backgroundColor: "#007BFF",
                    color: "#fff",
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  View Details
                </button>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default MyOrders;

MyOrders.getLayout = function getLayout(page: any) {
  return (
    <RootLayout>
      <DashboardLayout>{page}</DashboardLayout>
    </RootLayout>
  );
};
