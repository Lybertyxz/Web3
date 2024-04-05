import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";
import Navigation from "./Navigation";
import { useAuth } from "../context/AuthContext";
import { useNavBar } from "../context/NavBarContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const { showNavBar, hideNavBar } = useNavBar();

  const publicPaths = ["/", "/login", "/register", "/404"];

  useEffect(() => {
    if (publicPaths.includes(router.pathname)) {
      hideNavBar();
    } else {
      showNavBar();
    }

    if (!publicPaths.includes(router.pathname) && !isAuthenticated) {
      router.push("/login");
    }
  }, [router.pathname, isAuthenticated, showNavBar, hideNavBar]);

  return (
    <div className="flex h-screen">
      <Navigation />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
