import Link from "next/link";
import { useAuth } from "../context/AuthContext";

interface NavButtonProps {
  path: string;
  name: string;
}

const NavButton: React.FC<NavButtonProps> = ({ path, name }) => {
  return (
    <div
      className="duration-400 border-gray-white m-5
      cursor-pointer border-b transition-all hover:scale-125 hover:text-gray-300"
    >
      <Link href={path}>{name}</Link>
    </div>
  );
};

const Navigation = () => {
  const { logout } = useAuth();

  return (
    <nav className="animate-bg-change m-4 flex flex-col justify-between rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex flex-col items-center p-7">
        <NavButton path="/marketplace" name="Market Place" />
        <NavButton path="/my" name="My Assets" />
        <NavButton path="/my/create" name="New Asset" />
      </div>
      <div
        className="duration-400 border-gray-white my-5
      cursor-pointer self-center border-b pt-5 transition-all hover:scale-125 hover:text-gray-300"
      >
        <button
          onClick={() => {
            logout();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
