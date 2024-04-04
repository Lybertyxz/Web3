// components/Layout.tsx
import { useRouter } from "next/router";
import { useEffect, ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = true; // Implement your authentication logic here

  // Specify paths that do not require authentication
  const publicPaths = ["/", "/login", "/register"];

  const showNav = !publicPaths.includes(router.pathname);

  // Redirect logic for unauthenticated access to protected pages
  useEffect(() => {
    if (!publicPaths.includes(router.pathname) && !isAuthenticated) {
      router.push("/");
    }
  }, [router, isAuthenticated]);

  return (
    <div className="flex h-screen">
      {showNav && <Navigation />}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
