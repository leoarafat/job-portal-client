import LoginPage from "@/components/candidateLogin/login";
import RootLayout from "@/components/layouts/RootLayout";
import React from "react";

const LoginCandidate = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default LoginCandidate;
LoginCandidate.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
