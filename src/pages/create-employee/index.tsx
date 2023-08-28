// pages/signup.tsx
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import signupImage from "../../assests/auth/signup.png";
import dynamic from "next/dynamic";

import { useRouter } from "next/router";
import { isErrorResponse, isSuccessResponse } from "@/shared/loginResponse";
import { Spin, message } from "antd";
import { useCreateEmployeeMutation } from "@/redux/features/user/userSlice";
const RootLayout = dynamic(
  () => import("../../components/layouts/RootLayout"),
  {
    ssr: false,
  }
);

interface SignupFormValues {
  name: string;
  email: string;
  password: string;
}

const CreateEmployee = () => {
  const { handleSubmit, register } = useForm<SignupFormValues>();

  const router = useRouter();
  const [createEmployee, { isLoading }] = useCreateEmployeeMutation();

  const handleSignupSubmit: SubmitHandler<SignupFormValues> = async (data) => {
    try {
      const response = await createEmployee(data);

      if (isSuccessResponse(response)) {
        message.success("Employee register Successful");
        router.push("/login-employee");
      } else if (isErrorResponse(response)) {
        message.error(response.error.data.message);
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Large image, hidden on small screens */}
      <div className="hidden md:block">
        <Image src={signupImage} alt="Signup" width={450} height={450} />
      </div>
      <div className="flex bg-gray-100 items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full sm:w-96">
          <div className="text-center">
            <h2 className="mt-4 text-2xl font-semibold text-gray-800">
              Create an employee account
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(handleSignupSubmit)}
            className="mt-6 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                {...register("name", { required: true })}
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full px-3 py-2 mt-1 text-gray-800 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter your name"
              />
            </div>
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
                autoComplete="new-password"
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
                {isLoading ? <Spin /> : "Sign up"}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login-employee">
                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                  Log in
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
CreateEmployee.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
