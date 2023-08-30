import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useRouter } from "next/router";

interface PrivateRouteProps {
  children: React.ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const router = useRouter();

  if (!user) {
    router.push("/login-candidate");
    return null;
  }

  return <>{children}</>;
}

export default PrivateRoute;
