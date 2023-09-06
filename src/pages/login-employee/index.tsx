/* eslint-disable react/no-unescaped-entities */
// pages/login.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import { FiUser } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import loginImage from "../../assests/auth/login.png";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
import { LoginFormValues } from "@/types/user";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginEmployeeMutation } from "@/redux/features/auth/authApi";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
import { setUser } from "@/redux/features/auth/authSlice";
import { Spin, message } from "antd";
import { useRouter } from "next/router";
import Head from "next/head";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

const LoginEmployee = () => {
  const { handleSubmit, register } = useForm<LoginFormValues>();
  const dispatch = useAppDispatch();
  const [loginEmployee, { isLoading }] = useLoginEmployeeMutation();
  const router = useRouter();
  const handleLoginSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    try {
      const response = await loginEmployee(data);

      if (isSuccessResponse(response)) {
        const user = response.data.data;
        dispatch(setUser(user));
        Cookies.set("employee", JSON.stringify(user));
        dispatch(setUser(user));
        message.success("employee Login Successful");
        router.push(`/employee-profile`);
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {}
  };

  return (
    <>
      <Head>
        <title>Login - Employee</title>
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <div className="hidden md:block">
          <Image src={loginImage} alt="Logo" width={450} height={450} />
        </div>
        <div className="flex  bg-gray-100 items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
            <div className="text-center">
              <Image
                src={loginImage}
                alt="Logo"
                width={64}
                height={64}
                className="mx-auto"
              />
              <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                Sign in to your employee account
              </h2>
            </div>
            <form
              onSubmit={handleSubmit(handleLoginSubmit)}
              className="mt-6 space-y-4"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  {...register("email", { required: true })}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isLoading ? "Signing..." : "Sign in"}
                </button>
              </div>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/create-employee">
                  <span className="font-medium text-indigo-600 hover:text-indigo-500">
                    Sign up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginEmployee;

LoginEmployee.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
