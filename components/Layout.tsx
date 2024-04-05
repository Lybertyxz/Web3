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

  const publicPaths = ["/", "/login", "/register", "/404"];

  const showNav = !publicPaths.includes(router.pathname);

  useEffect(() => {
    if (!publicPaths.includes(router.pathname) && !isAuthenticated) {
      router.push("/login");
    }
  }, [router.pathname, isAuthenticated]);

  return (
    <div className="flex h-screen">
      {showNav && <Navigation />}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
