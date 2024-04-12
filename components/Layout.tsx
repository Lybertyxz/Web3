import { useRouter } from "next/router";
import { useEffect, ReactNode, useState } from "react";
import Navigation from "./Navigation";
import { useAuth } from "../context/AuthContext";
import WalletInfo from "./WalletInfo";
import { apiService } from "../utils/api";
import { User } from "../utils/types";

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

  const [profile, setProfile] = useState<User>({
    username: "",
    description: "",
    email: "",
    walletBalance: 0,
    walletAddress: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedAsset = await apiService.account.getProfile();
        setProfile(fetchedAsset);
      } catch (error) {
        console.error("Error fetching assets:", error.message);
      }

      fetchData();
    };
  }, [profile]);

  if (showNav)
    return (
      <div className="flex h-screen">
        <Navigation />
        <WalletInfo
          balance={profile.walletBalance}
          address={profile.walletAddress}
        />
        {children}
      </div>
    );

  return (
    <div className="flex h-screen">
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Layout;
