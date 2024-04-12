import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";
import Navigation from "./Navigation";
import { useAuth } from "../context/AuthContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const publicPaths = ["/", "/account/login", "/account/register", "/404"];

  const showNav = !publicPaths.includes(router.pathname);

  useEffect(() => {
    if (!publicPaths.includes(router.pathname) && !isAuthenticated) {
      router.push("/account/login");
    }
  }, [router.pathname, isAuthenticated]);

  if (showNav)
    return (
      <div className="flex h-screen">
        <Navigation />
        <div>{children}</div>
      </div>
    );

  return (
    <div className="flex h-screen">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
